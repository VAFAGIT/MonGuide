<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center"
    style="
      background-image: url('https://img.freepik.com/vecteurs-libre/fond-formes-etoiles-colorees_52683-61010.jpg?t=st=1654702031~exp=1654702631~hmac=ad7e2567b71151b1054718bac527b7c706d7c008157c6a2835b8930218706b89&w=1380');
    "
  >
    <div class="flex justify-end">
      <div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
        <div>
          <a href="/" class="h-20 w-60">
            <img src="/logo1.png" />
          </a>
          <form>
            <div>
              <h1 class="text-lg font-semibold">Sign Up</h1>
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="email">Fullname</label>
              <input
                v-model="user.fullname"
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="Fullname"
                name="Fullname"
                placeholder="Fullname"
              />
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="email">Email</label>
              <input
                v-model="user.email"
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="email"
                name="password"
                placeholder="email"
              />
            </div>

            <div class="mt-5">
              <label class="block text-md mb-2" for="password">Password</label>
              <input
                v-model="user.password"
                class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>

            <div class="flex justify-between"></div>
            <div class="">
              <button
                @click.prevent="handleSubmit"
                class="mt-4 mb-3 w-full bg-purple-900 hover:bg-purple-800 text-white py-2 rounded-md transition duration-100"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",

  data() {
    return {
      user: {
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.user);
      // // fetch  to server
      // fetch("http://localhost/api/Users/create/")

    //   const user = {
    //     fullname: this.fullname,
    //     email: this.email,
    //     password: this.password,
    //     failed: false,

    //     // authIsReady: this.$store.state.authIsReady,
    //   };

      const response = this.$store.dispatch("createUser", this.user).then(() => {
        if (response) {
          alert("Successfully created user!");
          this.$router.push('/login');
          this.authIsReady = true;
        } else {
          this.failed = true;
        }
      });
    },
    // mounted ()
    // {
    // 	console.log(this.$store.getters.isAdmin)
    // 	if(!this.$store.getters.isAdmin)  this.$router.go(-1)
    // },
  },
};
</script>
