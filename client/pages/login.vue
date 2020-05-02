<template>
<div class="container">
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
        <form class="mt-4"> 
        <p class="h4 text-center mb-4">Sign in</p>
            <div class="grey-text">
                <label>Your email</label><br>
                <mdb-input icon="envelope" type="email" v-model="email"/><br>
                <label>Your password</label><br>
                <mdb-input  icon="lock" type="password" v-model="password"/>
            </div>
            <br>
            <div class="text-center">
                <mdb-btn color="primary" @click="onLogin">Login</mdb-btn>
                </div>
        </form>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';
import { mdbInput, mdbBtn } from 'mdbvue';
export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn
    },
    middleware:"auth",
    auth:"guest",
    layout:"none",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        
        async onLogin(){
            //const axios = require('axios');
            
            try
            {
                   //console.log("in if statement")
                   await this.$auth.loginWith("local",{
                        data:{
                            email:this.email,
                            password:this.password
                        }
                    });
                    //document.getElementById("link").innerHTML="Confirm"
                    //setTimeout(this.$route.push("/"),4000)
                    //this.$route.go("/")
                    this.$router.push("/profile")
                
            }
            catch(err){
                alert("Login failed!")
            }
        }
    }
}
</script>
