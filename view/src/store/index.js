import { createStore } from "vuex";
import router from '@/router';

// import createPersistedState from 'vuex-persistedstate'


export default createStore({
  state: {
    user: null,
    authIsReady: false,
    failed: false,
    // Order: [],
    // Voyafe: [],
    data: {},
    islogin: false,
    isAdmin: false,
  },
  
  getters: {
    authIsReady: (state) => state.authIsReady,
    user: (state) => state.user,
    // Order: (state) => state.Order,
    // Voyage: (state) => state.Voyage,
    data: (state) => state.data,
    islogin: (state) => state.islogin,
    isAdmin: (state) => state.isAdmin,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      console.log("user state changed:", state.user);
    },
    setAuthIsReady(state, authIsReady) {
      state.authIsReady = authIsReady;
      console.log("authIsReady state changed:", state.authIsReady);
    },
    setFailed(state, failed) {
      state.failed = failed;
      console.log("failed state changed:", state.failed);
    },

    setData(state, data) {
      state.data = data;
      console.log("data state changed:", state.data);
    },
    setIslogin(state, islogin) {
      return (state.islogin = islogin);
    },
    setisAdmin(state,isAdmin) {
      return (state.isAdmin = isAdmin);
    },
  },
  actions: {
    async createUser(context, user) {
      console.log(user);

      await fetch("http://localhost/api/Users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // if (data[0] === 200) {
          //   context.commit('setUser', Cookies.set('user', data[1]))
          //   context.commit('setAuthIsReady', true)
          //   context.commit('setFailed', false)
          //   console.log('user created')

          //   // save user to local storage using cookies plugin
          localStorage.setItem("authIsReady", true);
          localStorage.setItem("user", data[1]);

          // }
        });
    },
    async logoutUser(context) {
      context.commit("setUser", null);
      context.commit("setAuthIsReady", false);
      context.commit("isAdmin", false);
      localStorage.setItem('user',null);
      localStorage.setItem('authIsReady',false);

      router.replace('/')
    },
    async loginUser(context, data) {
      fetch("http://localhost/api/Users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          // 'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {

          if (!data.result) {
            alert("Password or email not correct!");
          } else {
            context.commit("setUser", data.result[0].id);
            context.commit("setAuthIsReady", true);
            context.commit("setFailed", false);
            // save user to local storage 
            localStorage.setItem("user", data.result[0].id);
            localStorage.setItem("authIsReady", true);
            context.commit('setIslogin', true);

            if (data.role == "1") {
              context.commit("setisAdmin",true);
              // router.replace("/dashboardadmin");
            };
          }
        })
        .catch((error) => {
          console.log(error);
          context.commit("setFailed", true);
          router.replace("/login");
        });
    },

    getUser(context, id) {
      fetch("http://localhost/api/Voyages/get/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          // 'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data[1]);
          if (data === "success") {
            context.commit("setData", data[1]);
            // Cookies.set("dataVoyage", data);

            // save data to local storage using cookies plugin

            // Cookies.set('user', data[1])
          } else {
            // Cookies.remove('data', null)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
