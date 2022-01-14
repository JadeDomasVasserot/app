<template>
  <div id="CheckOut">
    <Nav></Nav>
   <h1>HELLO !</h1>
   <p>Toute l'équipe vous remercie pour votre commande !</p>
   <p>Votre commande n° (numéro commande) a bien été prise en compte le (date).</p>
  <ul>
  <li>Montant HT €€</li>
  <li>Taux marge commercial %</li>
  <li>Montant TTC €€</li>
  </ul>
    <router-link :to="{name: 'Historique'}">
  <button>Historique des commandes</button>
  </router-link>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
import Data from "../Mixins/Data.mixins"
export default {
   components:{Nav},
   mixins: [Data],
  name: 'CheckOut',
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
  
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
