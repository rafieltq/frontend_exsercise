<template>
  <v-app>
    <v-container class="mb-15">
      <mynav></mynav>
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import mynav from './components/mynav.vue'
export default {
  mounted () {
    if (localStorage.getItem('token') == null) {
      this.goto('login')
    } else {
      this.goto('admin')
    }
  },
  methods: {
    goto (route) {
      this.$router.push(route)
    }
  },
  components: { mynav },
  data: () => ({
    //
  })
}
</script>
