import axios from 'axios';


 const NewBeer = () =>
   new Promise( (resolve, reject) => {
     axios
       .post('https://ih-beers-api2.herokuapp.com/beers/new')
       .then( result => {
         const newBeer = result.data;
         resolve(newBeer);
       })
       .catch(error => {
         reject(error);
       });
   });

   export { NewBeer };