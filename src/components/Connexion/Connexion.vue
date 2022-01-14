<template>
  <div class="Connexion">
    <form @submit.prevent="getFormValues" method="POST">
      <h1>Connexion</h1>
      <div class="user">
        <label><b>Nom d'utilisateur : </b></label>
        <input
          type="text"
          placeholder="Entrer le nom d'utilisateur"
          name="username"
          required
        />
      </div>
      <div class="password">
        <label><b>Mot de passe: </b></label>
        <input
          type="password"
          placeholder="Entrer le mot de passe"
          name="password"
          required
        />
      </div>
      <div class="text">
        <router-link :to="'/Password1'">
          <p>Mot de passe oublié ?</p></router-link
        >
      </div>
      <div class="input">
        <input type="submit" id="submit" value="Se connecter"/>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Connexion",
  data() {
    return {
    };
  },
  methods: {
    async getFormValues(submitEvent) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/authentification/" +
            submitEvent.target.elements.username.value +
            "/" +
            submitEvent.target.elements.password.value
        );
        
        axios.defaults.headers.common['Authorization'] = response.data.Id
        console.log(response.data.Id);
        this.$router.push("Collection");

      } catch (error) {
        alert("Erreur de connexion : Mot de passe ou identifiant incorrect");
      }
    },

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
