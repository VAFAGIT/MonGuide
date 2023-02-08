<template>

    <div class="min-h-screen bg-no-repeat bg-cover bg-center"
	    style="background-image: url('https://img.freepik.com/vecteurs-libre/fond-formes-etoiles-colorees_52683-61010.jpg?t=st=1654702031~exp=1654702631~hmac=ad7e2567b71151b1054718bac527b7c706d7c008157c6a2835b8930218706b89&w=1380')">
	<div class="flex justify-end">

	<div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
		   
	<div>
        <a href="/" 
        class="h-20 w-60"
         >
            <img src = "/logo1.png">
        </a>
			<form>
				<div>
					<h1 class="text-1xl font-semibold">Login to your account</h1>
				</div>

				
				<div class="my-3">
					<label class="block text-md mb-2" for="email">Email</label>
					<input v-model="user.email" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email">
                </div>
				<div class="mt-5">
					<label class="block text-md mb-2" for="password">Password</label>
					<input v-model="user.password" class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password">
                </div>
				<div class="flex justify-between">
								
				</div>
				<div class="">
						<button 
                       @click.prevent="handelSubmit"
                        class="mt-4 mb-3 w-full bg-purple-900 hover:bg-purple-800 text-white py-2 rounded-md transition duration-100">Login now</button>
					
				</div>
			</form>
				    <p 
                    @click="$router.push('/Register')"
                    class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-blue-600"> Register</span></p>
	</div>
	</div>
	</div>
    </div>

</template>
<script>

// import { computed } from '@vue/runtime-core'
// import Cookies from 'js-cookie'


export default {
    name : 'Login',
    components: {
       
    
    },
    data() {
        return {
          user:{
                email: '',
                password: '',
          }
              
        }
    },
    methods : {
      handelSubmit(){
         
        const process=  this.$store.dispatch('loginUser',this.user)

        .then(() => {  
             if (localStorage.getItem('authIsReady') === 'true') {
                this.failed = false;
                this.$router.push('/dashboardadmin')
                this.authIsReady = true;
             }
              else if (localStorage.getItem('authIsReady') === 'false') {
                
                  this.failed = true;
              }
            })
            
            
      
        }
    },

        computed :{
        }
}
</script>
