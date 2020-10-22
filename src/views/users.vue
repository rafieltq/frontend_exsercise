<template>
  <div>
    <list></list>
  </div>
</template>

<script>
import list from '../components/list.vue'

export default {
  mounted () {
    // eslint-disable-next-line eqeqeq
    if (this.isLogged == false) {
      console.log('ruede')
      this.goto('login')
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
    }
  },
  components: { list }
}
</script>
