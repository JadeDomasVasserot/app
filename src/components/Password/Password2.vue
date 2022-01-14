<template>
  <div class="Password2">
    <p>Votre email de réinitialisation a été
envoyé. Il sera valide seulement 15
minutes.</p>
        <div class="input">
            <router-link :to="'/'">
                <input type="submit" id='submit' value='Retour' >
            </router-link>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Password2',
  data () {
    return {
     
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
</style>
