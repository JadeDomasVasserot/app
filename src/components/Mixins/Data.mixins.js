export default {
  data () {
    return {
       orders: [
            {
                date :'10/06/2022',
                number: 123456789,
                amountOutMargin: 100,
                comMargin: 40,
                totalAmount: 60,
      
            },
            {
                date :'16/03/2022',
                number: 123456790,
                amountOutMargin:100,
                comMargin: 20,
                totalAmount: 80,

            },
            {
                date :'19/10/2022',
                number: 123456791,
                amountOutMargin:110,
                comMargin: 10,
                totalAmount: 99,

            }
        ],
        // catégorie
        categories:[
          {
           cateName: 'Femme'
          },
          {
           cateName: 'Homme'
          }
       ],
       // dans collection 
      
        products: [
            {
                idProduct: 1,
                reference : '#123',
                name: 'Chaussures jaunes',
                price: 119.99,
                image: require('@/assets/chaussures/chaussure1.jpg'),
                category:'Homme',
               

            },
            {
                idProduct: 2,
                reference : '#124',
                name: 'Chaussures rouges',
                price: 99.99,
                image: require('@/assets/chaussures/chaussure2.jpg'),
                category:'Homme',
               
            },
             {
                idProduct: 3,
                reference : '#125',
                name: 'Chaussures roses',
                price: 105.99,
                image: require('@/assets/chaussures/chaussure4.jpg'),
                category:'Femme',
               

            },
             {
                idProduct: 4,
                reference : '#126',
                name: 'Chaussures noires',
                price: 89.99,
                image: require('@/assets/chaussures/chaussure3.jpg'),
                category:'Femme',
                
            },


            
      ],
       categoriesArray:['Tous les produits','Femme', 'Homme'],
       // revendeurs
      
       users:[
           {
               lastname: 'GUILLERMIN',
               name: 'Pacôme',
               email: 'c.guillermin@epsi.fr',
               level: 'Administrateur',
               margin: 0,
           },
            {
               lastname: 'BERARD',
               name: 'Erine',
               email: 'erine.berard@epsi.fr',
               level: 'Administrateur',
               margin: 0,
           },
           {
               lastname: 'GUEDET',
               name: 'Noé',
               email: 'noe.guedet@epsi.fr',
               level: 'Commercial',
               margin: 30,
           },
            {
               lastname: 'DOMAS-VASSEROT',
               name: 'Jade',
               email: 'jade.domasvasserot@epsi.fr',
               level: 'Commercial',
               margin: 40,
           }
           ,
           {
               lastname: 'GUEDET',
               name: 'Noé',
               email: 'noe.guedet@epsi.fr',
               level: 'Commercial',
               margin: 30,
           },
            {
               lastname: 'DOMAS-VASSEROT',
               name: 'Jade',
               email: 'jade.domasvasserot@epsi.fr',
               level: 'Commercial',
               margin: 40,
           },
           {
               lastname: 'GUEDET',
               name: 'Noé',
               email: 'noe.guedet@epsi.fr',
               level: 'Commercial',
               margin: 30,
           },
            {
               lastname: 'DOMAS-VASSEROT',
               name: 'Jade',
               email: 'jade.domasvasserot@epsi.fr',
               level: 'Commercial',
               margin: 40,
           },
           {
               lastname: 'GUEDET',
               name: 'Noé',
               email: 'noe.guedet@esi.fr',
               level: 'Commercial',
               margin: 30,
           },
            {
               lastname: 'DOMAS-VASSEROT',
               name: 'Jade',
               email: 'jade.domasvasserot@epsi.fr',
               level: 'Commercial',
               margin: 40,
               
           }
          
       ], 
       Basket: [
    
            {
              idProduct: 1,
                reference : '#123',
                name: 'Chaussures jaunes',
                price: 119.99,
                image: require('@/assets/chaussures/chaussure1.jpg'),
                category:'Homme',
                shoesSize: 40.5,
                size: 'L',
                quantity: 1,

            }, 
            {
              idProduct: 4,
              reference : '#126',
              name: 'Chaussures noires',
              price: 89.99,
              image: require('@/assets/chaussures/chaussure3.jpg'),
              category:'Femme',
              shoesSize: 38.5,
              size: 'S',
              quantity: 2,
            }           
       ]
    
    
    }
  },
}