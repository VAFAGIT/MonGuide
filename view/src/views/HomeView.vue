<template>
  <div>
  <NavBar />
  <Home />
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Home,NavBar,Footer
  },
 
}
</script>
