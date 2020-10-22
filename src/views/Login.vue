<template>
  <div class="about flex">
    <h1 class="text-center">Login</h1>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="E-mail" :rules="rules.name" v-model="user.email"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="password" type="password" :rules="rules.pass" v-model="user.password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4" class="text-center"><v-btn color="info" @click="loginUser()">Login</v-btn></v-col>
    </v-row>
    <v-snackbar
    color="red"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{snackMessage}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="danger"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import httpClient from '../api/HttpClient.js'

export default {
  data () {
    return {
      snackbar: false,
      timeout: 2000,
      snackMessage: '',
      options: {
        headers: { 'Content-Type': 'application/json' }
      },
      user: {
        email: '',
        password: ''
      },
      rules: {
        name: [val => (val || '').length > 0 || 'This field is required'],
        pass: [val => (val || '').length > 0 || 'This field is required']
      }
    }
  },
  methods: {
    loginUser () {
      httpClient
        .post('https://apidev.kanvas.dev/v1/auth', this.user, this.options)
        .then(response => {
          this.snackbar = true
          this.user.email = ''
          this.user.password = ''
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('user', JSON.stringify(response.data))
          this.goto('admin')
          this.$store.commit('switchLogged', true)
        })
        .catch(error => {
          console.log(error.response.status)
          if (error.response.status === 404) {
            this.snackbar = true
            this.snackMessage = 'Este usuario no existe'
          } else if (error.response.status === 422) {
            this.snackMessage = 'El correo electronico o la contraseña son incorrectos'
            this.snackbar = true
          }
        })
    },
    goto (route) {
      this.$router.push(route)
    }
  }
}
</script>
