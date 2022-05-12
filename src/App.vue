
<template>
  
  <h1>My name is {{ username }}</h1>
  <h2>I'm {{ age }} years old</h2>
  <h3>And I'm a {{ occupation}}</h3>

</template>

<script>

  //import Home from '@/views/Home'

  export default {

    name: 'App',
    data() {
      return {

        username: 'Rômulo',
        age: 25,
        occupation: 'Fullstack Software Developer Jr.'

      }
    }

  }

</script>

<style lang="css" scoped>

  h1 {
    color: red;
  }

</style>
