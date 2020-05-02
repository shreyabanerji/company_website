<template>
<main>
    <div class="container">
            <div class="row">
                
                    
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                    <form class="mt-4"> 
                        <h1>Company details</h1>
                        <!--Name-->
                        <br>
                        <br>
                        <div>
                             <blockquote class="blockquote bq-primary">
                      
                         
                            
                              <img :src="`http://localhost:3000/${compData.logo}`" height="100" width="100" />
                             </blockquote>
                        </div>
                        <div>
                            <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Name: {{compData.name}}</p>
                         
                            </blockquote>
                        </div>
                        <!--Email-->
                        <div>
                            <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Address: {{compData.address}}</p>
                         
                            </blockquote>
                        </div>
                        
                        <!--Password-->
                          
                    </form>
                    </div>
            </div>
        </div>
    </main>
</template>
    
<script type="module" lang="ts">
import axios from 'axios';

export default {
 
  async asyncData({$axios,params})
    {
        try{
            
            let companyData=await $axios.$get(`/api/company/${params.id}`);
            console.log(companyData.company)
            return{
                compData:companyData.company
            }
        }
        catch(err){
            console.log(err)

        }
  }
}
</script>
