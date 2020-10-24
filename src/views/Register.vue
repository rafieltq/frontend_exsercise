<template>
  <div class="about flex">
    <h1 class="text-center">Register</h1>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Firstname" :rules="rules.required"  v-model="user.firstname"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Lastname" :rules="rules.required"  v-model="user.lastname"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="e-mail" :rules="rules.required"  v-model="user.email"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Password" :rules="rules.required"  type="password" v-model="user.password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Confirm password" :rules="rules.required"  type="password" v-model="user.verify_password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Default Company" :rules="rules.required"  v-model="user.default_company"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4" class="text-center"><v-btn color="info" @click="saveProducts()">Register</v-btn></v-col>
    </v-row>
    <v-snackbar
      :color="snackbarColor"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{snackMessage}}
      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbarColor"
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
import httpClient from '../api/HttpClient'

export default {
  data () {
    return {
      snackbar: false,
      timeout: 2000,
      snackbarColor: 'danger',
      snackMessage: '',
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        verify_password: '',
        default_company: ''
      },
      rules: {
        required: [val => (val || '').length > 0 || 'This field is required']
      },
      options: {
        headers: { 'Content-type': 'application/json' }
      }
    }
  },
  methods: {
    goto (route) {
      this.$router.push(route)
    },
    saveProducts () {
      httpClient
        .post('https://apidev.kanvas.dev/v1/users', this.user, this.options)
        .then(response => {
          this.user.firstname = ''
          this.user.lastname = ''
          this.user.email = ''
          this.user.password = ''
          this.user.verify_password = ''
          this.user.default_company = ''
          this.snackMessage = 'Usuario creado'
          this.snackbarColor = 'success'
          this.snackbar = true
          window.localStorage.setItem('token', response.data.session.token)
          window.localStorage.setItem('user', JSON.stringify(response.data.user))
          this.goto('admin')
          this.$store.commit('switchLogged', true)
          this.goto('admin')
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.snackMessage = error.response.data.errors.message
            this.snackbarColor = 'red'
            this.snackbar = true
          } else if (error.response.status === 404) {
            this.snackMessage = error.response.data.errors.message
            this.snackbarColor = 'red'
            this.snackbar = true
          }
        })
    }
  }
}
</script>
