<template>
<div class="w-50 ml-auto mr-auto">
    <h1 class="text-center mt-3">- Index Page -</h1>
    <hr>
    <h3>> List Komoditas</h3>
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
        }
    },
    async mounted() {
        const dataAcc = await axios.get('http://localhost:3000/komoditas?accept=true')
        this.dataAcc = dataAcc.data
    }
}
</script>