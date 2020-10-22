<template>
    <div class="contaiter w-25 ml-auto mr-auto">
    <h1 class="text-center mt-3">- Login Page -</h1>
    <hr>
    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button @click.prevent="" type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
    </div>
</template>