<template>
  <div class="flex">
     <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            id
          </th>
          <th class="text-left">
           firstname
          </th>
          <th class="text-left">
           lastname
          </th>
          <th class="text-left">
           e-mail
          </th>
          <th class="text-left">
           default_company
          </th>
          <th class="text-left">
           created_at
          </th>
          <th class="text-left">
           updated_at
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users"
          :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.default_company }}</td>
          <td>{{ user.created_at }}</td>
          <td>{{ user.updated_at }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    this.getUsers()
  },
  data () {
    return {
      users: '',
      authAxios: axios.create({
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImp0aSI6Ijc1ZDIxMThlLThjZjMtNDM1Yy04NThjLTlkNDRiM2U5ODVmNiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpY2FudmFzLmdld2Flci5pbyIsImF1ZCI6Imh0dHBzOlwvXC9hcGljYW52YXMuZ2V3YWVyLmlvIiwianRpIjoiNzVkMjExOGUtOGNmMy00MzVjLTg1OGMtOWQ0NGIzZTk4NWY2IiwiaWF0IjoxNjAzMzY0ODI0LCJuYmYiOjE2MDMzNjUzMjQsImV4cCI6MTYwMzY2Njg0NCwic2Vzc2lvbklkIjoiNzVkMjExOGUtOGNmMy00MzVjLTg1OGMtOWQ0NGIzZTk4NWY2IiwiZW1haWwiOiJlamVtcGxvYUBlbWFpbC5jb20ifQ.1Zky4g-xic71QXm24QW97p-3hWfwdlLhUE6EwslR-f5hBycYtfGS2JAymPfViPm95RLBwEuerGUn2XbgaKXaqw'
        }
      })
    }
  },
  methods: {
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
