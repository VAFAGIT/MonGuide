<template>
<router-view>
  
</router-view>
</template>

<script>
import Home from '@/views/HomeView.vue';
export default {
  name : "App",
  components:{ Home },
  mounted ()
  {
    if (localStorage.getItem('user') ==! null)
        this.$store.commit('setIslogin',true)
      
  }
}
</script>
