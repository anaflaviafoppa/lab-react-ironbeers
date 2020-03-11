import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export const SearchBar = (props) => {
  return (
    <div>
      <Form>
          <Form.Group controlId="searchBar">
            <Form.Control type="text" 
            placeholder="Search your favorite beer" 
            onChange={props.handleInputSearch}
            value={props.query}
            />
          </Form.Group>
        </Form>
    </div>
  )
}


export default SearchBar;
