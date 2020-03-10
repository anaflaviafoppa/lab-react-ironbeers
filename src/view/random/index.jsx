import React, { Component } from 'react';
import axios from 'axios';

/*COMPONENT*/
import SingleBeerComponent from '../../components/SingleBeerComponent';
import NavbarBeer from '../../components/Navbar';

import { randomBeers } from '../../services/randomBeers';



export default class Random extends Component {
  constructor(props){
    super(props);
    this.state={
      beer:{}
    };
  }

  componentDidMount(){
    this.fetchData();
  }

 
  fetchData(){
    randomBeers()
    .then( beer =>{
      this.setState({
        beer
      });
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {

    const { beer } = this.state;




    return (
      <div>
        
        <NavbarBeer /> 
        <SingleBeerComponent key={beer._id} {...beer} />
      </div>
    )
  }
}
