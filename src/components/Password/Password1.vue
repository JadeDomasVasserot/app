<template>
  <div class="Password1">
    <p>Veuillez saisir votre identifiant afin de vérifier votre identité. Nous vous enverrons un mail de réinitialisation ensuite si le compte existe.</p>
    <form action="" method="POST">
        <div class="user">
            <label><b>Nom d'utilisateur : </b></label>
            <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>
        </div>
        <div class="input">
            <router-link :to="'/Password2'">
                <input type="submit" id='submit' value='Réinitialiser' >
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Password1',
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
