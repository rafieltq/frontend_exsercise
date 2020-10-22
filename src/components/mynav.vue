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
      <v-btn class="ml-5" text @click="goto('admin')" color="black">Administrar usuarios</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="goto('login')" dark color="info" outlined>
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn @click="goto('register')" dark color="info" class="ml-1">
        <span class="mr-2">Register</span>
      </v-btn>
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
  },
  methods: {
    goto (route) {
      this.$router.push(route)
    }
  }
}
</script>
