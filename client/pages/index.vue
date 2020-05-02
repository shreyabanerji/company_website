<template >

<div class="container">
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <template v-if="$auth.$state.loggedIn">
        <h1> Go to your profile and logout.</h1>
          </template>
          <template v-else>
           <h1>Login to see your profile.</h1>
          </template>
        </div>
      </div>
    </div>
</template>
    
  <script>
import axios from 'axios';
import Vue from 'vue'



  export default {
 
   
  }
  
  </script>
