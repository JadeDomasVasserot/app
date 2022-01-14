<template>
  <div id="erreur">
    <Nav></Nav>
    <h1>404</h1>
    <h2>Nous n'avons pas pu trouver votre page</h2>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
export default {
   components:{Nav},
  name: 'Erreur404',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
