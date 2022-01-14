<template>
  <div class="Nav">
    <div class="displayUser">
      {{user.name}}  {{user.lastName}}
    </div>
    <router-link :to="{name: 'Menu'}">
         <img class="hamburger" src="@/assets/icons/hamburger.jpg" alt="no img">
   </router-link>
    </div>
</template>

<script>
import axios from "axios"
axios.defaults.withCredentials = true
export default {
  name: 'Nav',
  data () {
    return {
       user : axios.get('http://127.0.0.1:8000/api/users/1').then(rep => this.user = rep.data),
       Currentuser: axios.get('http://127.0.0.1:8000/id/session').then(rep => this.Currentuser = rep.data),
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
}

.Nav{

}

.displayUser{
  font-size: 4.5em;
}

.hamburger{
  width: 40%;
  vertical-align: middle;
}
</style>
