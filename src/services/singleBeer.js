import axios from 'axios';

const Single = id =>
  new Promise((resolve,reject) => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then( result => {
      const beer = result.data;
      resolve(beer);
    })
    .catch(reject);
  });


  export { Single };