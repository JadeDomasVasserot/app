<template>
  <div class="Profil">
    <Nav></Nav>
    <div class="champs">
      <h1>Profil :</h1>
      <div class="lastname">
          <label for="lastname">Nom : </label>{{user.name}}
      </div>
      <div class="name">
          <label for="name">Prénom : </label>{{user.lastName}}
      </div>
      <div class="mail">
          <label for="mail">Email : </label>{{user.email}}
      </div>
      <div class="level">
          <label for="level">Niveau : </label>{{user.level}}
      </div>
      <div class="rate">
          <label for="rate">Taux de marge commercial : </label>{{user.margin}}
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Menu/Nav.vue"
//import Data from "../Mixins/Data.mixins"
import axios from "axios"
export default {
   components:{Nav},
  // mixins: [Data],
  name: 'Profil',
  data () {
    return {
     user:  axios.get('http://127.0.0.1:8000/api/users/4').then(rep =>this.user =    rep.data)
      
    }
  }, 
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
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
label{
  margin-bottom:4px;
  margin-left :10px;
}
.champs{
  text-align: left;
  margin-left :10px;
}
</style>
