import React, { Component } from 'react';
import { Form } from 'react-bootstrap';



/*Services*/
import {ListAll as ListOfBeers } from '../../services/listBeers';


/*COMPONENTS*/
import BeerItem from '../../components/BeerItem';
import NavbarBeer from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';


export default class AllBeers extends Component {
  constructor(){
    super();
    this.state={
      beers:[],
      query: ''
    }

    this.handleInputSearch=this.handleInputSearch.bind(this);
  }

  /*SEARCH*/
  handleInputSearch(event){
    const {name,value} = event.target;

    this.setState({
      [name]:value
    })
  }

  get filteredBeer() {

    const filteredBeer = this.state.beers.filter( beer => {
      return beer.name.toLowerCase().includes(this.state.query.toLowerCase());
    });

    return filteredBeer;
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
        <NavbarBeer />
        
        <Form>
          <Form.Group controlId="searchBar">
            <Form.Control type="text"
            name="query" 
            placeholder="Search your favorite beer" 
            onChange={this.handleInputSearch}
            value={this.state.query}
            />
          </Form.Group>
        </Form>




        {/* <SearchBar 
        handleInputSearch={this.handleInputSearch}
        value={this.state.query} /> */}

        <div>
          {
            this.filteredBeer.map( beer => (
              <BeerItem key={beer._id} {...beer}  />
            ))
          }
        </div>
        
      </div>
    )
  }
}
