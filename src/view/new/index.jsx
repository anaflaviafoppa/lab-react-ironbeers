import React, { Component } from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';

import NavbarBeer from '../../components/Navbar';

/*POST*/
import axios from 'axios';



export default class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by : ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission=this.handleFormSubmission.bind(this);
  };

  handleFormSubmission(event){
    event.preventDefault();

      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      });
  };



  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  


  render() {
    return (
      <div>
        <NavbarBeer />


        <div className="container">
          <Form onSubmit={this.handleFormSubmission} action="/all" method="POST">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter Name" 
              name="name"
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="tagline">
              <Form.Label>Tagline</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter tagline"
              name="tagline" 
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" type="text"
              rows="5" 
              name="description"
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="first_brewed">
              <Form.Label>first_brewed</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="first_brewed"
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="brewers_tips">
              <Form.Label>brewers_tips</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="brewers_tips  " 
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="attenuation">
              <Form.Label>Attenuation Level</Form.Label>
              <Form.Control type="number" 
              placeholder="" 
              name="attenuation_level " 
              onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="contributed_by">
              <Form.Label>Contributed by</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="contributed_by " 
              onChange={this.handleInputChange}
              />
            </Form.Group>

        
          
            <Button variant="primary" type="submit">
              ADD NEW
            </Button>
          </Form>
        </div>
      </div>
      
    )
  }
}
