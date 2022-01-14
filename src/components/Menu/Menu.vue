<template>
  <div class="Menu">
    <div class="admin" v-if="user.level == 2">
      <router-link :to="'/Products'">
          <p>Gestion des produits</p>
      </router-link>
      <router-link :to="'/Revendeurs'">
          <p>Gestion des revendeurs</p>
      </router-link>
      <router-link :to="'/Categories'">
          <p>Gestion des catégories</p>
      </router-link>
    </div>
    <router-link :to="'/Collection'">
        <p>Collection</p>
    </router-link>
    <router-link :to="'/Historique'">
        <p>Historique</p>
    </router-link>
    <router-link :to="'/Panier'">
        <p>Panier</p>
    </router-link>
    <router-link :to="'/Profil'">
        <p>Profil</p>
    </router-link>
    <router-link :to="'/'">
        <p>Déconnexion</p>
    </router-link>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Menu',
  data () {
    return {
      user:  axios.get('http://127.0.0.1:8000/api/users/4').then(rep =>this.user = rep.data)
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
.hamburger{
  width: 50px;
}
</style>
