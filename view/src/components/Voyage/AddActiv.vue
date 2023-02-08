<template>
<div class="h-screen">
  <div class="flex justify-center items-center h-full ">
      <div class=" md:h-5/6 w-auto">
            <img
              class="object-cover w-full h-full"
              src="https://img.freepik.com/photos-gratuite/plan-plan-jouet-blanc-vue-dessus_23-2148666303.jpg?t=st=1655749834~exp=1655750434~hmac=54ef8e50e5a4f0e8d49b83110f3a2a3c62670ddb1217017d60ea20e0e71a73bc&w=996"
              alt="img"
            /> 
          </div> 
      
 
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Add activitie</h2>
    </div>
    <form @submit.prevent="AddA" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
      <div>
          <button></button>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Name*</label>
        <input v-model="activities_info.name" name="first-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Order*</label>
        <select v-model="activities_info.Order" type="number" min=1 max=6 name="last-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>

        </select>
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Description</label>
        <input v-model="activities_info.description" name="company" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

     

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
    name: "AddActiv",
    components: {
    },
       
    data() {
        return {
            activities_info: {
                name: "",
                order :"",
                description: "",
            },
        
        //   id:localStorage.get('activites_info'),
        }
  },
    methods: {
        AddA(){

            // console.log(this.travel)
            const data={
                  name: this.activities_info.name,
                  Order: this.activities_info.Order,
                  description: this.activities_info.description,
                  id_travel: this.$route.params.id
            }
    
           console.log(data)
                fetch('http://localhost/api/Activites/addActivites/', {
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
                    alert('activites added')
                    this.$router.push('/dashboardadmin')
                  }
                })
        
    },
     mounted(){
       
    }

        
     
  
}
}
</script>

