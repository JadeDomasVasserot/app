<template>
  <div class="Categorie">
    <Nav></Nav>
     <h2>Gestions des Catégories </h2>
    <div class="categorieName" >
        <ul>
          <!--<li v-for="cate in categories">{{cate.cateName}} 
            <span>
              <router-link :to="{name: 'EditCategorie'}">
                  <button class="edit">Editer</button> 
              </router-link>
              <button class="del">Delete</button>
            </span>
          </li>-->
          <li v-for="cat in categories['hydra:member']" :key="cat.idcat">
           <p class="nom">{{cat.name}} </p>
           <router-link :to="{name: 'EditCategorie', params: {CatId: cat.idcat} }">
                <button class="edit">Editer</button> 
            </router-link>
            <router-link :to="{name: 'Categorie'}">
              <button class="del" @click="Delete(cat.idcat)">Delete</button> 
            </router-link>
          </li>
          
        </ul>
        
    </div>
<router-link :to="'/Categories/Create'">
    <button class="button">Ajouter une catégorie</button></router-link>
  </div>
</template>

<script>
import axios from "axios"
import Nav from "@/components/Menu/Nav.vue"
import Data from "../Mixins/Data.mixins.js"
export default {
   components:{Nav},
   mixins: [Data],
  name: 'Categorie',
 
  data () {
    return {
      categories:  axios.get('http://127.0.0.1:8000/api/categories').then(rep => this.categories = rep.data),
    }
  },
  methods:{
  
    async Delete(selectCatego){
     
      await axios.delete('http://127.0.0.1:8000/api/categories/'+ selectCatego).then(response => {
      location.reload();
    }).catch(error => {
        console.log("handlesubmit error for blog ", error)
    })
      
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

a {
  color: #42b983;
}
  h2{
      border-bottom:3px solid #78788c
  }

  .button{float:right;padding:8px 12px;margin:8px 0 0;border:2px solid #78788c;background:0;color:#5a5a6e;cursor:pointer;transition:all .3s}
  .button:hover{background:#78788c;color:#fff}
 
  .edit {
    background-color: rgb(126, 163, 24);
    color:white;
    border: none;
    margin-left: 30%;
  }
  .del {
    background-color: rgb(172, 23, 23);
    color:white;
    border: none;
    margin-left: 30%;
  }
  li {
    width: 15em;
    display: inline-flex;
    margin: 0.3em 0;
    width: 80%;
    font-weight: bold;
    justify-content: space-between;
  }

.nom{
  display: inline;
  margin : 0;
}
 
 
</style>
