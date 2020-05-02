<template>
    <main>
       <div class="container">
            <div class="row">
                
                    
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                    <form class="mt-4"> 
                        <h1>User details</h1>

                        <br><br>
                        <img :src="`http://localhost:3000/${$auth.$state.user.photo}`" style="width:150px height 100px" />
                        <!--Name-->
                        <div>
                            <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Name: {{$auth.$state.user.name}}</p>
                         
                            </blockquote>
                           
                        </div>
                        <!--Email-->
                        <div>
                       
                            <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Email: {{$auth.$state.user.email}}</p>
                         
                            </blockquote>
                        </div>
                         <div>
                             <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Job Role: {{$auth.$state.user.job_role}}
                            </p>
                         
                            </blockquote>
                           
                            
                        </div>
                         <div>
                             <blockquote class="blockquote bq-primary">
                            <p class="bq-title">Company: 
                                <label style="width:100px"><a :href="`/company/${comp.companyID._id}`">{{comp.companyID.name}}</a></label>
                            </p>
                         
                            </blockquote>
                           
                            
                        </div>
                        <blockquote class="blockquote bq-primary">
                          <a href="#" @click="onLogout">Logout</a>
                        </blockquote>
                    </form>
            </div>
    </div>

</div>
    </main>
    
</template>

<script>
export default {
    data(){
        return {
            name:"",
            email:"",
            password:""

        };
    },
    async asyncData({$axios,$auth}){
     try
      { 
        
        let comp= await $axios.$get("/api/comp");
       
        console.log(comp.company[0])
        return {
          comp:comp.company[0],
         
          
        }
        //app.getFP();
       
      }
      catch(err){
        console.log(err);
      }
    
       
    
    },
    methods:{
        async onLogout(){
            await this.$auth.logout();
        }
    },
   
};
</script>
