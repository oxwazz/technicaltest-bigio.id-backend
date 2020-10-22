const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')

const pool = new Pool ({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '2588',
    database: 'survey_komoditas'
})

const port = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.get('/komoditas', async (req, res) => {
    const { accept } = req.query
    const { rows } = await pool.query(`
        SELECT
            detail_komoditas.id as id,
            barang.nama_barang as "barang",
            daerah.nama_daerah as "daerah",
            harga,
            tanggal

        FROM detail_komoditas
        INNER JOIN barang ON detail_komoditas.id_barang = barang.id
        INNER JOIN daerah ON detail_komoditas.id_daerah = daerah.id
        WHERE accept=${accept}
        ORDER BY tanggal DESC;`)

    rows.forEach((data) => {
        // convert tanggal
        let dd = data.tanggal.getDate()
        let mm = data.tanggal.getMonth()+1
        let yyyy = data.tanggal.getFullYear()
        data.tanggal = `${dd}-${mm}-${yyyy}`
        // convert currency
        data.harga = data.harga.toLocaleString('en-US', { 
            style: 'currency',
            currency: 'IDR' 
        }).split('.')[0]
    })
    res.send(rows)
})

app.post('/komoditas', async (req, res) => {
    const { id_barang, id_daerah, harga, accept } = req.body
    await pool.query(`
        INSERT INTO detail_komoditas(id_barang, id_daerah, harga, accept)
        VALUES(${id_barang}, ${id_daerah}, ${harga}, false);`)
    console.log(`Data berhasil ditambahkan`)
    res.send(`Data berhasil ditambahkan`)
})

app.put('/komoditas/:id', async (req, res) => {
    const { id } = req.params
    await pool.query(`
        UPDATE detail_komoditas
        SET accept=true
        WHERE id=${id};`)
    console.log(`Berhasil diupdate id: ${id}`)
    res.send(`Berhasil diupdate id: ${id}`)
})

app.delete('/komoditas/:id', async (req, res) => {
    const { id } = req.params
    await pool.query(`
        DELETE FROM detail_komoditas
        WHERE id=${id};`)
    console.log(`Berhasil dihapus id: ${id}`)
    res.send(`Berhasil dihapus id: ${id}`)
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const { rows } = await pool.query(`
        SELECT * FROM role
        WHERE username='${username}' AND password='${password}'`)
    
    if (!rows.length) {
        console.log({ error: 'user gaada cuy' })
        return res.send({ error: 'user gaada cuy' })
    }
    
    console.log({ success: `masuk sebagai ${rows[0].role}` })
    res.send({ success: `masuk sebagai ${rows[0].role}` })
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})