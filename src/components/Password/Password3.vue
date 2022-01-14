<template>
  <div class="Password3">
    <form action="" method="POST">
        <div class="password">
            <label><b>Mot de passe: </b></label>
            <input type="password" placeholder="Entrer le mot de passe" name="password" required>
        </div>
         <div class="conf-password">
            <label><b>Confirmation du mot de passe: </b></label>
            <input type="conf-password" placeholder="Entrer de nouveau le mot de passe" name="conf-password" required>
        </div>
        <div class="input">
            <input type="submit" id='submit' value='Valider' >
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Password3',
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
