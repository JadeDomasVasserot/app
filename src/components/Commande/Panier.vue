<template>
  <div id="Panier">
    <Nav></Nav><button @click="console(user)">console</button>
    <h1>Panier</h1>
   <div  v-for="article in basket[0]" :key="article.productId">
      <img :src="article.productPicture" alt="noimage" style="width: 100px">
      <h3 class="text">{{article.productName}}</h3>
      <p class="text">Ref : {{article.productReference}}</p>
      <p class="text">Pointure : {{article.shoesSize}}</p>
      <p class="text">Largeur : {{article.size}}</p>
      <p class="text">{{article.productUnitPrice}} €€</p>
      <form @submit.prevent="getFormValues">
        <label class="text" for="quantity">Quantité :
          <input type="number" name="quantity" :value="article.quantity">
          <input type="hidden" name="id" :value="article.IdProductInBasket">
          <input type="submit" value="valider">
        </label>
      </form>
      <br>
      <button @click="suppr(article.IdProductInBasket)">Supprimer</button>
   </div>
   <router-link :to="{name: 'CheckOut'}">
      <button @click="valider()">Valider la commande</button>
   </router-link>
   <router-link :to="{name: 'Collection'}">
   <button>Continuer les achats</button>
   </router-link>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
//import Data from "../Mixins/Data.mixins"
import axios from "axios"
export default {
   components:{Nav},
 //  mixins: [Data],
  name: 'Panier',
  data () {
    return {
      basket: axios.get('http://127.0.0.1:8000/returnpanier/4').then(rep => this.basket = rep.data),
       user : axios.get('http://127.0.0.1:8000/api/users/4').then(rep => this.user = rep.data),

    }
  },
  methods:{
    console(x) {
      console.log(x)
    },
    async valider(){
      basket[0].foreach()
      axios.post('http://localhost:8000/api/commande',{
           "date": Date.now,
            "number": 10000+id,
            "amountoutmargin": 100,
            "commargin": user.margin,
            "totalamount": 90,
            "user": user.id,
           
            
            })
        .then(function (response) {
                console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        
      })
    },
    async suppr(id) {
      await axios.delete('http://localhost:8000/api/products_in_baskets/'+id)
      location.reload()

    },
    change() {
      console.log()
    },
    async getFormValues(submitEvent) {
       await axios.put('http://localhost:8000/api/products_in_baskets/'+submitEvent.target.elements.id.value,{ quantity: parseInt(submitEvent.target.elements.quantity.value,10)}).then(function (response) {
                console.log(response);
                
            })
            .catch(function (error) {
                console.log(error.request);
                console.log('http://localhost:8000/api/products_in_baskets/'+submitEvent.target.elements.id.value+', {quantity:'+ submitEvent.target.elements.quantity.value+'}')
            });
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
button{
  margin : 2px;
  border-radius: 8px;
  
  width: 130px;

  background-color: white;
  color: black;
  border: 2px solid #6ABBF3;

  transition-duration: 0.4s;
  
}

button:hover {
    background-color: #6ABBF3; 
    color: white;
}
</style>
