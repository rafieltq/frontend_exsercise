<template>
  <div class="about flex">
    <h1 class="text-center">Login</h1>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="E-mail" required :rules="rules.name" v-model="user.email"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="password" type="password" required :rules="rules.pass" v-model="user.password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4" class="text-center"><v-btn color="info" @click="loginUser()">Login</v-btn></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
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
      axios
        .post('https://apidev.kanvas.dev/v1/auth', this.user, this.options)
        .then(response => {
          this.user.email = ''
          this.user.password = ''
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('user', JSON.stringify(response.data))
          this.goto('admin')
          this.$store.commit('switchLogged', true)
        })
        .catch(error => {
          console.log(error)
        })
    },
    goto (route) {
      this.$router.push(route)
    },
    getUsers () {
      this.authAxios
        .get('https://apidev.kanvas.dev/v1/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
