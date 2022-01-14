import Vue from 'vue'
import Router from 'vue-router'
import Erreur404 from '@/components/404/Erreur404.vue'
import Collection from '../components/Collection/Collection.vue'
import DetailProduct from '../components/Collection/DetailProduct.vue'
import Connexion from '../components/Connexion/Connexion.vue'
import Profil from '../components/Profil/Profil.vue'
import Menu from '../components/Menu/Menu.vue'
import Revendeurs from '../components/Revendeurs/Revendeurs.vue'
import Categorie from '../components/Categorie/Categorie.vue'
import Product from '../components/Products/Product.vue'
import EditProduct from '../components/Products/EditProduct.vue'
import CreateProduct from '../components/Products/CreateProduct.vue'
import Historique from '../components/Historique/Historique.vue'
import HistoriqueDetail from '../components/Historique/HistoriqueDetail.vue'
import Panier from '../components/Commande/Panier.vue'
import CheckOut from '../components/Commande/CheckOut.vue'
import CreateRevendeur from '../components/Revendeurs/CreateRevendeur.vue'
import EditRevendeur from '../components/Revendeurs/EditRevendeur.vue'
import CreateCategorie from '../components/Categorie/CreateCategorie.vue'
import EditCategorie from '../components/Categorie/EditCategorie.vue'
import Password1 from '../components/Password/Password1.vue'
import Password2 from '../components/Password/Password2.vue'
import Password3 from '../components/Password/Password3.vue'
import Password4 from '../components/Password/Password4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection,
      props: true
    },
    {
      path: '/Collection/:selectProduct',
      name: 'DetailProduct',
      component: DetailProduct,
      props: true
    },
    
    {
      path: '/Erreur', // path: '/:catchAll(.*)',
      component: Erreur404
    },
   
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/CheckOut',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/Revendeurs',
      name: 'Revendeurs',
      component: Revendeurs
    },
    {
      path: '/Revendeurs/Create',
      name: 'CreateRevendeur',
      component: CreateRevendeur
    },
    {
      path: '/Revendeurs/:RevendId',
      name: 'EditRevendeur',
      component: EditRevendeur,
      props: true,
    },
    {
      path: '/Categories',
      name: 'Categorie',
      component: Categorie
    },
    {
      path: '/Categories/Create',
      name: 'CreateCategorie',
      component: CreateCategorie
    },
    {
      path: '/Categories/:CatId',
      name: 'EditCategorie',
      component: EditCategorie,
      props: true,
    },
    {
      path: '/Products',
      name: 'Products',
      component: Product
    },
    {
      path: '/Products/Create',
      name: 'CreateProduct',
      component: CreateProduct
    },
    {
      path: '/Produts/:ProdId',
      name: 'EditProduct',
      component: EditProduct,
      props: true,
    },
    {
      path: '/Historique',
      name: 'Historique',
      component: Historique
    },
    {
      path: '/Historique/:selectOrderID',
      name: 'HistoriqueDetail',
      component: HistoriqueDetail,
      props: true,
    },
    {
      path: '/Panier',
      name: 'Panier',
      component: Panier
    },
    {
      path: '/Password1',
      name: 'Password1',
      component: Password1
    },
    {
      path: '/Password2',
      name: 'Password2',
      component: Password2
    },
    {
      path: '/Password3',
      name: 'Password3',
      component: Password3
    },
    {
      path: '/Password4',
      name: 'Password4',
      component: Password4
    },
  ]
})
