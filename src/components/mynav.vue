<template>
    <div>
        <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1><span class="info--text">MCTEKK</span></h1>
      </div>
      <v-btn class="ml-5" text @click="goto('admin')" color="black">Listado de usuarios</v-btn>
      <v-spacer></v-spacer>
      <div v-if="!isLogged">
        <v-btn @click="goto('login')" dark color="info" outlined>
        <span class="mr-2">Login</span>
        </v-btn>
        <v-btn @click="goto('register')" dark color="info" class="ml-1">
        <span class="mr-2">Register</span>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="red" @click="logout()">Logout</v-btn>
      </div>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'mynav',
  data () {
    return {
    }
  },
  computed: {
    isLogged () {
      // eslint-disable-next-line dot-notation
      return this.$store.getters['getIsLogged']
    }
  },
  methods: {
    goto (route) {
      this.$router.push(route)
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$store.commit('switchLogged', false)
      this.goto('login')
    }
  }
}
</script>
