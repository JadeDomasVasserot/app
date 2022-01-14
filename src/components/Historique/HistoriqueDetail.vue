<template>
  <div class="DetailHisto">
    <Nav></Nav>
      <router-link :to="{name: 'Historique'}">
      <button class="back">Retour</button>
      </router-link>
        <h2>Commande n°{{order.number}} </h2>
        <p>le {{order.date}} </p>
        <p>Prix conseillé : {{order.amountoutmargin}} € </p>
         <p>Marge commerciale : {{order.commargin}}€ ({{order.commargin}}*{{order.amountoutmargin}}/100 %)</p>
         <p>Prix  : {{order.totalamount}}€</p>
        <div  v-for="article in order[0]" :key="article.productId">
          <img :src="article.productPicture" alt="noimage" style="width: 100px">
          <h3 class="text">{{article.productName}}</h3>
          <p class="text">Ref : {{article.productReference}}</p>
          <p class="text">Pointure : {{article.shoesSize}}</p>
          <p class="text">Largeur : {{article.size}}</p>
          <p class="text">{{article.productUnitPrice}} €€</p>
          <p>Quantité : {{article.quantity}}</p> 
        </div>
      </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
//import Data from "../Mixins/Data.mixins.js"
import axios from "axios"
export default {
   components:{Nav},
  // mixins:[Data],
  name: 'HistoriqueDetail',
  props: ['selectOrderID'],
  data () {
    return {
       order: axios.get('http://127.0.0.1:8000/return/produit/commande/'+ this.selectOrderID).then(rep => this.order = rep.data)
    }
  },
  computed: {    
  },
 methods: {
  
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
 
  margin: 50px;
}
a {
  color: #42b983;
}
h2{
      border-bottom:3px solid #78788c
  }
</style>
