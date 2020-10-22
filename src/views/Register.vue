<template>
  <div class="about flex">
    <h1 class="text-center">Register</h1>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Firstname" v-model="user.firstname"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Lastname" v-model="user.lastname"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="e-mail" v-model="user.email"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Password" type="password" v-model="user.password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Confirm password" type="password" v-model="user.verify_password"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4"><v-text-field color="info" label="Default Company" v-model="user.default_company"></v-text-field></v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col sm="4" class="text-center"><v-btn color="info" @click="saveProducts()">Register</v-btn></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        verify_password: '',
        default_company: ''
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
      axios
        .post('https://apidev.kanvas.dev/v1/users', this.user, this.options)
        .then(response => {
          this.user.firstname = ''
          this.user.lastname = ''
          this.user.email = ''
          this.user.password = ''
          this.user.verify_password = ''
          this.user.default_company = ''
          this.goto('admin')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
