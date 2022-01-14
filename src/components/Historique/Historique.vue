<template>
  <div id="Historique">
    <Nav></Nav>
    <h2>Historique des commandes</h2>
    
    <div class="commande" v-for="ord in order[0]" @click="selectOrd(ord.id)" :key="ord.id">
       <router-link :to="{name: 'HistoriqueDetail', params: {selectOrderID: ord.id }}">
      <p class="number">
        <span>N° {{ord.number}}</span>
        <span>le {{ord.date}}</span>
      </p>
      <p class="total">TOTAL : {{ord.totalamount}} €</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
//import Data from "../Mixins/Data.mixins.js"
import axios from "axios"
export default {
   components:{Nav},
  //  mixins:[Data],
  name: 'Historique',
  data () {
    return {
        order: axios.get('http://127.0.0.1:8000/return/commande/1').then(rep => this.order = rep.data),
        //récupère commande de user /commande/{user.id}
    }
  },
   methods:{
    selectOrd (id){
      this.selectOrderID = id;
    }
    
  },
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
  text-decoration: none;
}
h2{
     
      border-bottom:3px solid #78788c
  }
  p {
    margin: 0;
  }
  .number {
    display: flex;
    justify-content: space-between;
    color: black;
  }
  .commande {
    background-color: rgb(241, 241, 241);
    padding: 0.5em 1em;
    margin: 1em;
    border-radius: 10px;
  }
  .total {
    color: black;
    font-weight: bold;
  }
</style>
