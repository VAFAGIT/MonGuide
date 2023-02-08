<template>
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">


   <nav class="flex items-center bg-purple-900 p-1 flex-wrap">
   
      <a href="/" class=" h-20 w-60 mr-1 inline-flex items-center">
        <img src = "/logo.png" >
      </a>
      <button
        class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation">
        <i class="material-icons font-semibold">menu</i>
      </button>
      <div
        class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation">
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a
            href="/"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold text-gray-400 items-center justify-center hover:bg-amber-500 hover:text-white">
            <span>Home</span>
          </a>
          <a
            href="/AboutView"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold text-gray-400 items-center justify-center hover:bg-amber-500 hover:text-white">
            <span>About</span>
          </a>
          <!-- <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold text-gray-400 items-center justify-center hover:bg-amber-500 hover:text-white">
            <span>Offers</span>
          </a> -->
          <!-- <a
            href="#"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold text-gray-400 items-center justify-center hover:bg-amber-500 hover:text-white">
            <span>Contact Us</span>
          </a> -->
        
          <a
            href="/dashboard"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold text-gray-400 items-center justify-center hover:bg-amber-500 hover:text-white">
            <span>Mon Espace</span>
          </a>
         <button @click="$router.push({ name: 'Login' })"
          class="p-1 pl-3 pr-3 bg-transparent border-2 border-amber-400 text-amber-400 text-lg rounded-lg hover:bg-amber-400 hover:text-purple-900 focus:border-2 focus:border-purple-900">Login</button> |
        <button @click="$router.push({ name: 'Register' })"
          class="p-1 pl-3 pr-3 bg-transparent border-2 border-amber-400 text-amber-400 text-lg rounded-lg hover:bg-amber-400 hover:text-purple-900 focus:border-2 focus:border-purple-900">Register</button>

        </div>
      </div>
      
    </nav>
  </div>

</template>

<script>


</script>


<style>

  html,
body {
  font-family: "Rubik", sans-serif;
}



@media (min-width: 1024px) {
  .top-navbar {
    display: inline-flex !important;
  }
}

</style>