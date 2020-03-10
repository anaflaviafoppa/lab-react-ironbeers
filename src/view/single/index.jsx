import React, { Component } from 'react';
import axios from 'axios';

/*COMPONENT*/
import SingleBeerComponent from '../../components/SingleBeerComponent'



import {Single as SingleBeer } from '../../services/singleBeer';

export default class Single extends Component {
  constructor(props){
    super(props);
    this.state={
      beer:'null'
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    const id = this.props.match.params.id;
    SingleBeer(id)
      .then( beer => {
        this.setState({ beer });
      })
      .catch(error => {
        console.log(error);
      });
  }



  render() {

    const { beer } = this.state;


    return (
      <div>
        <SingleBeerComponent key={beer._id} {...beer} />
      </div>
    )
  }
}
