<template>
  <h1>CHOOSE A USERNAME:</h1>
  <input type="text" v-model="username" />
  <router-link to="/chat">
    <button type="button" @click="handleUserName">GO</button>
  </router-link>
</template>

<script>

  export default {

    name: 'Home',
    data() {
      return {
        username: ''
      }
    },
    methods: {
      handleUserName () { console.log(this.username) }
    }

  }

</script>