<template>
<div class="w-50 ml-auto mr-auto">
    <h1 class="text-center mt-3">- Admin Page -</h1>
    <hr>
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
            <th scope="col">Delete?</th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="(valAcc, index) in dataAcc" :key="index">
            <th scope="row">{{ valAcc.id }}</th>
            <td>{{ valAcc.barang }}</td>
            <td>{{ valAcc.daerah }}</td>
            <td>{{ valAcc.harga }}</td>
            <td>{{ valAcc.tanggal }}</td>
            <td><button @click="deleteData(valAcc.id)" class="btn btn-danger">Delete</button></td>
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
            dataNotAcc: []
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
        async refreshData() {
            const dataAcc = await axios.get('http://localhost:3000/komoditas?accept=true')
            const dataNotAcc = await axios.get('http://localhost:3000/komoditas?accept=false')
            this.dataAcc = dataAcc.data
            this.dataNotAcc = dataNotAcc.data
        }
    }
}
</script>