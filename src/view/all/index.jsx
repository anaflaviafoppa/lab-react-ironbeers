import React, { Component } from 'react';


/*Services*/
import {ListAll as ListOfBeers } from '../../services/listBeers';


/*COMPONENTS*/
import BeerItem from '../../components/BeerItem';



export default class AllBeers extends Component {
  constructor(){
    super();
    this.state={
      beers:[]
    }
  }

  componentDidMount(){
    this.fechData();
  }


  fechData(){
    ListOfBeers()
    .then( beers =>{
      this.setState({
        beers
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        {
          this.state.beers.map( beer => (
            <BeerItem key={beer._id} {...beer}  />
          ))
        }
      </div>
    )
  }
}
