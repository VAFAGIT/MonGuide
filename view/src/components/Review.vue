<template>
<div class="h-screen	w-full">
     <div class="general">
</div>
      <div class="ctn ">
      <div class="flex items-center  ">
      <div  class="flex-1 h-full max-w-4xl mx-auto bg-white  ">
       :
        
        <div class="flex flex-col md:flex-row">
    
            <div class=" md:h-auto w-auto">
             <img
              class="object-cover w-full h-full"
              src="https://img.freepik.com/vecteurs-libre/gestion-reputation-commentaires-utilisateurs-fidelisation-clients-compteur-satisfaction-client-avis-positif-confiance-entreprise-systeme-evaluation-qualite-cinq-etoiles_335657-2691.jpg?t=st=1655804116~exp=1655804716~hmac=9b5d00c5c014cf8fe997bf3601e28c83a9d29481eab9f8cc460b5b93ef0af655&w=826"
              alt="img"/> 
            </div> 
            <div class=" items-center justify-center p-6  md:w-1/2">
              <div class="w-full">
                    <div class="flex justify-center mb-20">
                        <div class="relative md:mt-8"> 
                        </div>
                    </div>
                          <form>
                            <h1 class="mb-4 text-lg font-bold text-center text-gray-700">Give your review</h1>
                              <div>
                              <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Stars</label>
                              <select v-model="review.star" type="number" min=1 max=5 name="last-name" required class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" >
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                

                              </select>
                               </div>

                              <div >
                                <label class="block text-sm">Comments</label>
                                <textarea v-model="review.comments" class=" w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="message"></textarea>
                              </div>
                                <input type="submit" value="Send" @click.prevent="AddR" class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"/>


                          </form>
                      </div>

              </div>
            </div>
      </div>
    </div>



</div>
</div>

</template>
<script>


export default {
    name: "Review",
    components: {
     
    },
       
    data() {
        return {
           review: {
                star: "",
                comments :""
            },
        
          // id:localStorage.get('travel'),
        }
    },
  
    methods: {
   AddR(){
// console.log(this.travel)
            const data={
                  star: this.review.star,
                  comments: this.review.comments,
                  id_travel: this.$route.params.id,
                  id_users:localStorage.getItem("user")
            }
              console.log(this.$route.params.id)

                fetch('http://localhost/api/Reviews/createR', {
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
                    alert('review added')
                    this.$router.push('/all-review')
                  }
                })
   },
     mounted(){
       
    }

        
     
   } 
}

</script>