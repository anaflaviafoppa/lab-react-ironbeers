import axios from 'axios';


 const ListAll = () =>
   new Promise( (resolve, reject) => {
     axios
       .get('https://ih-beers-api2.herokuapp.com/beers')
       .then( result => {
         const objectOfBeers = result.data;
         resolve(objectOfBeers);
       })
       .catch(error => {
         reject(error);
       });
   });

   export { ListAll };