<template>
<div class="w-50 ml-auto mr-auto">
    <h1 class="text-center mt-3">- Admin Page -</h1>
    <hr>
    <button class="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModal">Tambah Baru</button>
    <hr>

    <!-- Modal Tambah -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID_Barang:</label>
                <input v-model="tambahData.id_barang" type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">ID_Lokasi:</label>
                <input v-model="tambahData.id_daerah" type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
                <label for="recipient-name" class="col-form-label">Harga:</label>
                <input v-model="tambahData.harga" type="text" class="form-control" id="recipient-name">
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="createData" data-dismiss="modal" type="button" class="btn btn-primary">Tambah</button>
        </div>
        </div>
    </div>
    </div>
    <!-- End Modal Tambah -->

    <h3>> Waiting for accept</h3>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Harga</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Accept?</th>
            <th scope="col">Delete?</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(valNotAcc, index) in dataNotAcc" :key="index">
            <th scope="row">{{ valNotAcc.id }}</th>
            <td>{{ valNotAcc.barang }}</td>
            <td>{{ valNotAcc.daerah }}</td>
            <td>{{ valNotAcc.harga }}</td>
            <td>{{ valNotAcc.tanggal }}</td>
            <td><button @click="acceptData(valNotAcc.id)" class="btn btn-success" >Accept</button></td>
            <td><button @click="deleteData(valNotAcc.id)" class="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
    </table>
    <hr>
    <h3>> Accepted</h3>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Lokasi</th>
            <th scope="col">Harga</th>
            <th scope="col">Tanggal</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(valAcc, index) in dataAcc" :key="index">
            <th scope="row">{{ valAcc.id }}</th>
            <td>{{ valAcc.barang }}</td>
            <td>{{ valAcc.daerah }}</td>
            <td>{{ valAcc.harga }}</td>
            <td>{{ valAcc.tanggal }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
const axios = require('axios')

export default {
    data() {
        return {
            dataAcc: [],
            dataNotAcc: [],
            tambahData: {
                id_barang: '',
                id_daerah: '',
                harga: ''
            }
        }
    },
    mounted() {
        this.refreshData()
    },
    methods: {
        async deleteData(id) {
            await axios.delete(`http://localhost:3000/komoditas/${id}`)
            this.refreshData()
        },
        async acceptData(id) {
            await axios.put(`http://localhost:3000/komoditas/${id}`)
            this.refreshData()
        },
        async createData() {
            await axios.post(`http://localhost:3000/komoditas`, this.tambahData)
            this.refreshData()
            this.tambahData.id_barang = ''
            this.tambahData.id_daerah = ''
            this.tambahData.harga = ''
        },
        async refreshData() {
            const dataAcc = await axios.get('http://localhost:3000/komoditas?accept=true')
            const dataNotAcc = await axios.get('http://localhost:3000/komoditas?accept=false')
            this.dataAcc = dataAcc.data
            this.dataNotAcc = dataNotAcc.data
        }
    }
}
</script>