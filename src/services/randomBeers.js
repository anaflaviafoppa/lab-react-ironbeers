import axios from 'axios';


 const randomBeers = () =>
   new Promise( (resolve, reject) => {
     axios
       .get('https://ih-beers-api2.herokuapp.com/beers/random')
       .then( result => {
         const randomBeer = result.data;
         resolve(randomBeer);
       })
       .catch(error => {
         reject(error);
       });
   });

   export { randomBeers };