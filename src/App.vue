<template>
  <div id="app">
      <router-view/>

  </div>
</template>

<script>
import axios from 'axios'
export default {
 
  name: 'App',
  data () {
  return {
       user:  axios.get('http://127.0.0.1:8000/api/users/1').then(rep => rep.data)
    }
},
  methods:{
    getData(){
      
    axios.get('http://127.0.0.1:8000/api/categories').then(rep => this.info = rep.data)
    console.log(axios.get('http://127.0.0.1:8000/api/categories').then(rep => this.info = rep.data))
    }
  },
 

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>