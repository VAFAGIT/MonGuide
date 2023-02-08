<template>
<div class="h-screen">
  <div class="flex justify-center items-center h-full ">
      <div class=" md:h-5/6 w-auto">
           <img
              class="object-cover w-full h-full"
              src="https://img.freepik.com/vecteurs-libre/fond-vacances-vacances-valise-globe-realiste-appareil-photo_1284-10476.jpg?t=st=1655749834~exp=1655750434~hmac=77873aebc0c3da9608352380beeeee3dbab387361608292ec3e9ce0f228fa019&w=826"
              alt="img"
            /> 
          </div> 
      
 
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Update travel</h2>
    </div>
    <form @submit.prevent="update" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
      <div>
          <button></button>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Date départ*</label>
        <input v-model="travel.date_D" type= "date" name="first-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Duration*</label>
         <input v-model="travel.duration"  type= "number" name="last-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      
      </div>


      <div>
          <button></button>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Seats*</label>
        <input v-model="travel.seats" name="first-name" type= "number" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Price*</label>
         <input v-model="travel.price"  type= "number"  name="last-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
      
      <!-- <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Seats</label>
        <input v-model="activities_info.description" name="company" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div> -->


      <div class="sm:col-span-2 flex justify-between items-center">
        <button class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>
      </div>

    </form>
  </div>
</div>
  
  </div>

 </div>



</template>


<script>


export default {
    name: "UpdateVoy",
    components: {
     
    },
       
    data() {
        return {
           travel: {
                date_D: "",
                duration :"",
                seats: "",
                price: ""
            },
        
          // id:localStorage.get('travel'),
        }
  },
    methods: {
     getOneTravel(){
       let id = this.$route.params.id
       const newLocal = `http://localhost/api/Voyages/find/${id}` 
       console.log(newLocal)
       fetch(newLocal,{
         method : 'GET' 
       })
       .then((res) => res.json())
       .then((data) =>{
         this.travel = data
       })
     },
      
      update(){
           
        let id = this.$route.params.id
         const newLocal = `http://localhost/api/Voyages/update/${id}` 
            const data={
                  date_D: this.travel.date_D,
                  duration: this.travel.duration,
                  seats: this.travel.seats,
                  price: this.travel.price,
                  id_users:localStorage.getItem('user'),

            }
            console.log(data)
                fetch(newLocal, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers' : '*'
                },
                body: JSON.stringify(data)
                })
                .then((response)=> response.json())
                .then((data)=>{
                  console.log(data)
                  if(data)
                  {
                    alert('travel updated')
                    this.$router.push('/dashboardadmin')
                  }
                })
        
    },
      
    },
    
     mounted(){
        this.getOneTravel()
    }

        
     
  
}
</script>