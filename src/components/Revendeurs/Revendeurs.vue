<template>
  <div class="Revendeurs">
    <Nav></Nav>
      <h1>Gestions des Revendeurs </h1>
      <div class="allrevendeurs">
      <div class="revendeursName" v-if="user.level =='1'"
      v-for="user in  usersRevendeurs['hydra:member']" :key="user.id"
      
      @click="deplier(user)">

              <p >
              {{user.name}} {{user.lastName}}</p>
      </div>
      
    </div>
    <div class="preview">
      <div class="selectRevendeur"
      v-if="selectRevendeur != -1">
        <p class="select bold">{{selectRevendeur.lastName}} {{selectRevendeur.name}}</p> 
        <p class="select"><span class="label bold">Email : </span><span class="info">{{selectRevendeur.email}}</span></p>
        <p class="select"><span class="label bold">Marge : </span><span class="info">{{selectRevendeur.margin}} %</span></p>
      </div>
    </div>
    <div v-if="selectRevendeur != -1 ">
       <button class="del" @click="Delete(selectRevendeur.id)">Delete</button>
       <router-link :to="{name: 'EditRevendeur', params: {RevendId: selectRevendeur.id} }">
          <button class="edit">Edit</button>
       </router-link>
       </div>
    
    <div class="add">
    <router-link :to="'/Revendeurs/Create'">
      <button>Ajouter un revendeur</button>
    </router-link>
    </div>

  </div>
</template>

<script>
import axios from "axios"
import Nav from "@/components/Menu/Nav.vue"
import Data from "../Mixins/Data.mixins"
export default {
   components:{Nav},
   mixins: [Data],
  name: 'Revendeurs',
  data () {
    return {
        selectRevendeur:-1,
        usersRevendeurs:  axios.get('http://127.0.0.1:8000/api/users').then(rep => this.usersRevendeurs = rep.data),
    }
  },
  methods: {
       deplier(user) {
            this.selectRevendeur = user;
       },
      Delete(id){
     
      axios.delete('http://127.0.0.1:8000/api/users/'+ id).then(response => {
      location.reload();
    }).catch(error => {
        console.log("handlesubmit error for blog ", error)
    })
      
    }
},
 computed: {
    selectName() {
      return this.users[this.selectRevendeur].name;
    },
    selectLastname() {
      return this.users[this.selectRevendeur].lastname;
    },
    selectEmail() {
      return this.users[this.selectRevendeur].email;
    },
    selectLevel() {
      return this.users[this.selectRevendeur].level;
    },
    selectMargin() {
      return this.users[this.selectRevendeur].margin;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  border-bottom:3px solid #78788c;
  font-size: 1.7em;
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
  float:right;
  padding:8px 12px;
  margin:8px 5px 0;
  border:2px solid #78788c;
  background:0;color:#5a5a6e;
  cursor:pointer;
  transition:all .3s}
button:hover{background:#78788c;color:#fff}
.edit {
  border:2px solid rgb(129, 151, 32);
}
.del {
  border:2px solid rgb(150, 24, 24);
}
.edit:hover{background:#d2e61f;color:#fff}
.del:hover{background:#d60505;color:#fff}
.allrevendeurs {
  height: 15em;
  text-align: left;
  overflow: auto;
}
.selectRevendeur{
  background-color: rgba(211, 211, 211, 0.897);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 1em 1em;
}
.preview {
  border:solid gray 1px;
  height: 10em;
  border-radius:20px;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), #c3e4f780),url("https://svgsilh.com/svg_v2/2098873.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}

.bold{
  font-weight: bold;
}

.select {
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin : 15px 0;
}
p {
  margin: 0
}
.revendeursName{
  background-color: rgba(211, 211, 211, 0.336);
  padding: 10px 10px;
  margin: 0.5em;
  border-radius: 5px;
}
.info {text-align: center; width: 75%;color: rgb(0, 0, 0);}
</style>
