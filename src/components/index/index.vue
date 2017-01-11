<template>
  <div class="page">
    <navbar></navbar>
    <p>
      Content
    </p>
  </div>
</template>

<script>
  import Navbar from '../navbar.vue' 

  export default {
    name: 'index',
    components: {
      Navbar
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
