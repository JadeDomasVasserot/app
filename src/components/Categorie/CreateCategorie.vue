<template>
  <div class="CreateCategorie">
      <Nav></Nav>
    <form @submit.prevent="getFormValues" id="newCatForm" action="" method="POST" class="form">
        <form action="#/Categories">
            <input class="backbutton" type="submit" value="RETOUR" />
        </form>
        <h2>Nouvelle Catégorie</h2>
        <p>Nom : 
        <input class="input" type="text" placeholder=" Nom de la catégorie" name="name" required>
        </p>
        <input class="button" type="submit" id='submit' value='VALIDER' >
</form>
  </div>
</template>

<script>
    
import Nav from "@/components/Menu/Nav.vue"
import Data from "../Mixins/Data.mixins.js"
import axios from "axios"
export default {
    components:{Nav},
    mixins: [Data],
    name: 'CreateCategorie',
    data () {
    return {
    }},
    methods:{
    async getFormValues (submitEvent) {
        await axios.post('http://127.0.0.1:8000/api/categories',{ name: submitEvent.target.elements.name.value}).then(function (response) {
            console.log(response);
            
        })
        .catch(function (error) {
            console.log(error);
        });
        this.$router.push('../Categories')
         
        }
    
    },
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form{
        width:340px;
        height:17em;
        background:#ffffff;
        border-radius:8px;
        box-shadow:0 0 40px -10px #000;
        margin: 1em auto;
        padding:20px 30px;max-width:calc(100vw - 40px);
        box-sizing:border-box;
        font-family:'Montserrat',sans-serif;
        position:relative
    }
    a{
        text-decoration: none;
    }
    h2{
        color:#78788c;

    }
    .input{
        background:none;
        outline:none;
        resize:none;
        border:0;
        font-family:'Montserrat',sans-serif;
        transition:all .3s;border-bottom:2px solid #bebed2;
        width: 100%;
        margin: 10px;
    }
    .input:focus{
        border-bottom:2px solid #78788c
    }
    p:before{
        content:attr(type);
        display:block;
        margin:20px 0 0;font-size:14px;
        color:#5a5a5a
    }
    .button{float:right;padding:8px 12px;margin:8px 0 0;border:2px solid #78788c;background:0;color:#5a5a6e;cursor:pointer;transition:all .3s}
    .button:hover{background:#78788c;color:#fff}
    p {
        text-align: left;
    }
    .backbutton {
        display: block;
        padding:8px 12px;
        margin:0 0;
        border:2px solid #b31b1b;
        color: #5e0f0f;
        cursor:pointer;
        transition:all .3s
    }
    .backbutton:hover{background:#e60808;color:#fff}
</style>