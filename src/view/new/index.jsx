import React, { Component } from 'react';
import { Form, Button, Navbar } from 'react-bootstrap';

import NavbarBeer from '../../components/Navbar';



export default class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      tagline: '',
      description: '',
      brewers: '',
      attenuation: '',
      contributed: ''
    }
  };

  handleFormSubmission(event){
    event.preventDefault();

    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const brewers = this.state.brewers;
    const attenuation = this.state.attenuation;
    const contributed = this.state.contributed;

    if( !name || !tagline || !description || !brewers || !attenuation || !contributed){
      return;
    }

    const beer ={
      id: Date.now().toString(),
      name,
      tagline,
      description,
      brewers,
      attenuation,
      contributed
    };



  }


  render() {
    return (
      <div>
        <NavbarBeer />
        <div className="container">
          <Form onSubmit={this.handleFormSubmission}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter Name" 
              name="name"
              />
            </Form.Group>

            <Form.Group controlId="tagline">
              <Form.Label>Tagline</Form.Label>
              <Form.Control type="text" 
              placeholder="Enter tagline"
              name="tagline" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
              rows="5" 
              name="description"/>
            </Form.Group>

            <Form.Group controlId="brewers">
              <Form.Label>Brewers Tips</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="brewers"/>
            </Form.Group>

            <Form.Group controlId="attenuation">
              <Form.Label>Attenuation Level</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="attenuation" />
            </Form.Group>

            <Form.Group controlId="contributed">
              <Form.Label>Contributed by</Form.Label>
              <Form.Control type="text" 
              placeholder="" 
              name="contributed" />
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
