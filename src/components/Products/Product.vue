<template>
  <div class="Product">
    <Nav></Nav>
     <h1>Gestions des Produits </h1>
    <div class="ProductsName" >
        <ul>
            <li v-for="items in productAxios['hydra:member']" 
            @click="deplier(items)" :key="items.idproduit">
           {{items.name}} ref : {{items.reference}}
           <div class="selectProducts" v-if="selectProduct === items">
            <img v-bind:src="selectProduct.picture" alt="bug">
            <p>Nom : {{selectProduct.name}}</p> 
            <p class='price'>Prix : {{selectProduct.unitprice}} €</p>
            <p class='ref'>Reference : {{selectProduct.reference}}</p>
        
       <button class="fin" @click="Delete(selectProduct.idproduit)">Delete</button>
       <router-link :to="{name: 'EditProduct', params: {ProdId: selectProduct.idproduit} }"><button>Edit</button></router-link>
    </div>
            </li>
        </ul>
    </div>
    
<router-link :to="'/Products/Create'">
    <button>Ajouter un produit</button></router-link>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
import axios from "axios"
//import Data from "../Mixins/Data.mixins"
export default {
   components:{Nav},
  // mixins: [Data],
  name: 'Product',
  data () {
    return {
        selectProduct: -1,
        productAxios: axios.get('http://127.0.0.1:8000/api/products').then(rep => this.productAxios = rep.data),
    }
  },
  methods: {
       deplier(prod) {
            this.selectProduct = prod;
       },
       Delete(id){
     
      axios.delete('http://127.0.0.1:8000/api/products/'+ id).then(rep => {
      location.reload();
    }).catch(error => {
        console.log("handlesubmit error for blog ", error)
    })
      
    }
},
 computed: {
    selectId() {
      return this.products[this.selectProduct].idProduct;
    },
    selectReference() {
      return this.products[this.selectProduct].reference;
    },
    selectName() {
      return this.products[this.selectProduct].name;
    },
    selectPrice() {
      return this.products[this.selectProduct].price;
    },
    selectCategory() {
      return this.products[this.selectProduct].category;
    },
    selectImage() {
      return this.products[this.selectProduct].image;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
  margin-left:5%;
  text-align: left;
}
li {
  margin: 10px;
  text-align: left;
}
li:hover {
  color:#6ABBF3;
}
a {
  color: #42b983;
}
img {
  width : 50%;
  border-radius: 10%;
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
p{
  margin: 2px;
}
.price{
  width:70;
  margin-left:5%;
  font-size: 12px;
}
.ref{
  width:70;
  margin-left:5%;
  font-size: 12px;
}


</style>