<template>
  

  <input type="text" v-model="username" />
  <button type="button" @click="handleUserName">GO</button>
  

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

      handleUserName: () => {}

    },

    components: {}


    
    

  }

</script>