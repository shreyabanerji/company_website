<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
        <form class="mt-4"> 
        <p class="h4 text-center mb-4">Sign up</p>
        <div class="grey-text">
        <label>Your name</label>
        <mdb-input icon="user" type="text" v-model="name"/>
        <br>
        <label>Your email</label>
        <mdb-input icon="envelope" type="email" v-model="email"/>
       <br>
        <label>Your password</label>
        <mdb-input  icon="lock" type="password" v-model="password"/>
        <br>
        <label>Job role</label>
        <mdb-input  icon="lock" type="text" v-model="job_role"/>
        </div>
        <br>
        <div>
        <label>Company</label>
        <select class="dropdown">
        <option class="label" v-for="company in comp" :value="company.name" :key="company._id">{{company.name}}</option>

        </select>
        </div>
        <br><br>
        <div class="text-center">
        <mdb-btn color="primary" @click="OnSignup">Register</mdb-btn>
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
    components:{
        mdbInput,
        mdbBtn
    
  
    },
    layout:"none",
    middleware:"auth",
    auth:"guest",
    data(){
        return{
            name:"",
            email:"",
            password:"",
            job_role:""
        }
    },
    async asyncData({$axios}){
        try{
            let companies=await $axios.$get("/api/company")
            console.log(companies.company)
            return{
                comp:companies.company
            }
        }
        catch(err){
            console.log(err)
        }
    },
    methods:{
        
        async OnSignup(){
            //const axios = require('axios');
            try{
                let data={
                    name:this.name,
                    email:this.email,
                    password:this.password,
                    job_role:this.job_role
                }
                let response=await axios.post("/api/auth/signup",data);
                //console.log(response);
                if(response.status=200){
                    this.$auth.loginWith("local",{
                        data:{
                            email:this.email,
                            password:this.password
                        }
                    });
                    alert("Signed up successfully!")
                    this.$router.push("/")
            
                }
            }
            catch(err){
                alert("Sign up failed")
            }
        }
    }
}
</script>