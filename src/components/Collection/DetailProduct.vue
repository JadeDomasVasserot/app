<template>
  <div class="DetailProduct">
    <Nav></Nav>
      <main>
        <h1>{{product.name}} </h1>
        <p class="price">{{product.unitprice}} €</p>
        <img :src="product.picture" alt="" srcset="">
        
        <div class="Choix">
          <form @submit.prevent="getFormValues">
              <label for="pointure">Pointures : </label>

              <select name="pointure" id="pointure">
                <option value="35" class="pointure">35</option>
                <option value="35.5" class="pointure">35.5</option>
                <option value="36" class="pointure">36</option>
                <option value="36.5" class="pointure">36.5</option>
                <option value="37" class="pointure">37</option>
                <option value="37.5" class="pointure">37.5</option>
                <option value="38" class="pointure">38</option>
                <option value="38.5" class="pointure">38.5</option>
                <option value="39" class="pointure">39</option>
                <option value="39.5." class="pointure">39.5</option>
                <option value="40" class="pointure">40</option>
                <option value="40.5." class="pointure">40.5</option>
                <option value="41" class="pointure">41</option>
                <option value="41.5" class="pointure">41.5</option>
                <option value="42" class="pointure">42</option>
                <option value="42.5" class="pointure">42.5</option>
                <option value="43" class="pointure">43</option>
                <option value="43.5" class="pointure">43.5</option>
                <option value="44" class="pointure">44</option>
                <option value="44.5" class="pointure">44.5</option>
                <option value="45" class="pointure">45</option>
              </select>
              <label for="largeur" class="largeur">Largeur : </label>
              <select name="largeur" id="largeur" >
                <option value="S" class="largeur">S</option>
                <option value="M" class="largeur">M</option>
                <option value="L" class="largeur">L</option>
              </select>
              <input type="hidden" :value="product.id">
        
        <h2>Description :</h2>
        <p class="description"> Référence : {{product.reference}} </p>
        
          <input type="submit" class="add" id ="pannier" value="Ajouter au panier !">
           
        
        <router-link :to="{name: 'Collection'}">
          <button class="back" id ="retour">Retour</button>
        </router-link>
        </form>
        </div>
        
       
      </main>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
import Data from "../Mixins/Data.mixins"
import axios from "axios"
export default {
   components:{Nav},
   mixins: [Data],
  name: 'DetailProduct',
  props: ['selectProduct'],
  data () {
    return {
        product: axios.get('http://127.0.0.1:8000/api/products/'+this.selectProduct).then(rep => this.product = rep.data),
      
    }
  },
  methods: {
    async getFormValues(submitEvent) {
        await axios.get('http://127.0.0.1:8000/addtopanier/1/'+this.selectProduct+'/'+submitEvent.target.elements.largeur.value+'/'+submitEvent.target.elements.pointure.value+'/4')
        this.$router.push({name: 'Panier'})
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: left;
  margin : 0;
}

h2{
  margin-top : 20px;
  font-size: 15px;
  text-decoration-line: underline;
}

p {
  text-align: left;
  margin : 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

label {
  margin-left : 1%;
}

select{
  margin-right : 1%;
}

li {
  margin: 50px;
}

a {
  color: #42b983;
}

main{
  margin : 0;
  padding : 0;
}

img {
  width: 100%;
  margin-top: 10px;
}

.price{
  margin : 0;
  color: red;
}

.Choix {
  margin-top: 20px;
}

.description{
  font-size: 12px;
  margin-left: 5%;
}

button, .add{
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


#retour {
  width: 70px;
  margin-top : 10px;

}
img {
  width: 15em;
  height: 15em;
}


</style>
