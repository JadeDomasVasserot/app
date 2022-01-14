<template>
  <div class="Collection">
    <Nav></Nav>
    
    <div id="buttons">
     <!-- <div class="cat-btn" v-for="value in categoriesArray">
        <button v-on:click="selectCat(value)">{{ value }}</button>
      </div>-->
      <div class="cat-btn" v-for="cat in categories['hydra:member']" :key="cat.idcat">
        <button v-on:click="selectCat(cat.name)">{{cat.name }}</button>
      </div>
    </div>
    <h1 class="cat-name">{{ selectCategory }} </h1>
    <div class="item-section">
      <div class="item"
        v-for="items in productAndCAt[0]" :key="items.idproduit" v-if="selectCategory==='Tout'">

          <router-link :to="{ name: 'DetailProduct', params: { selectProduct: items.productId} }"
          >
              <img v-bind:src="items.productPicture" alt="bug" />
              <div class="footer">
                <span class="details">
                  <p class="name">{{ items.productName }}</p>
                  <p class="ref">{{ items.productReference }}</p>
                </span>
                <p class="price">{{ items.productUnitPrice}} €</p>
              </div>
            
            </router-link>
      </div>
        <div class="tous" v-else-if="selectCategory == items.category.Name">
          <router-link :to="{ name: 'DetailProduct', params: { selectProduct: items.productId} }"
          >
              <img class="imgCollectionSearch" v-bind:src="items.productPicture" alt="bug" />
              <div class="footer">
                <span class="details">
                  <p class="name">{{ items.productName }}</p>
                  <p class="ref">{{ items.productReference }}</p>
                </span>
                <p class="price">{{ items.productUnitPrice}} €</p>
              </div>
            
            </router-link>
        </div>
        </div>
      </div>
     
        

      <!--<div
        class="item"
        v-for="items in productAndCAt"
        v-if="selectCategory === items.category"
        :key="items.idproduit">
        <router-link
          :to="{ name: 'DetailProduct', params: { selectProduct: items.idproduit } }"
        >
          <img v-bind:src="items.image" alt="bug" />
          <div class="footer">
            <span class="details">
              <p class="name">{{ items.name }}</p>
              <p class="ref">{{ items.reference }}</p>
            </span>
            <p class="price">{{ items.price }} €</p>
          </div>
        </router-link>
      </div>-->
 
</template>

<script>
import Nav from "@/components/Menu/Nav.vue";
import axios from 'axios'
//import Data from "../Mixins/Data.mixins";
export default {
  components: { Nav },
 // mixins: [Data],
  name: "Collection",
  data() {
    return {
     categories:  axios.get('http://127.0.0.1:8000/api/categories').then(rep => this.categories = rep.data),
     productAndCAt: axios.get('http://127.0.0.1:8000/product/category').then(rep => this.productAndCAt = rep.data),
      selectProduct: 0,
      selectCategory: "Tout",
    };
  },
  methods: {
    selectCat(cat) {
      this.selectCategory = cat;

    },
    selectProd(index) {
      this.selectProduct = index;
    },
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-left: 10px;
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
img {
  width : 50%;
  border-radius: 10%;
}
.cat-btn button {
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  border-radius: 10%;
  font-weight: bold;
}
.cat-btn {
  display: inline-flex;
  margin: 0 0.3em 0 0;
}
.cat-name {
  font-weight: bold;
  text-align: left;
}
.item-section {
  display: inline-block;
}
.item {
  padding: 0.5em;
  margin: 1em 0;
  width: 20em;
  border: solid gray 1px;
  border-radius: 10%;
}
.details {
  color: rgb(43, 43, 43);
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  font-size: 120%;
}

.footer {
  text-align: left;
  margin: 0 2em;
}
.ref {
  color: rgb(199, 199, 199);
  font-size: 90%;
}

.item img {
  width: 15em;
  height: 15em;
}

.price {
  text-align: right;
  font-weight: bolder;
  font-size: 200%;
  color: #008cba;
  margin: 0.1em;
}

button{
  margin-top : 20px;
  border-radius: 8px;
  
  width: 150px;

  background-color: white;
  color: black;
  border: 2px solid #6ABBF3;

  transition-duration: 0.4s;
  

}

button:hover {
    background-color: #6ABBF3; 
    color: white;
    
}

.imgCollectionSearch {
  width: 20em;
}

</style>
