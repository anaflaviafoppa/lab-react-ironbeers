import React from 'react'

import { Link } from 'react-router-dom';

const BeerItem = (props) => {
  return (
<Link key={props._id} to={props._id}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={props.image_url} alt={props.name} />
        </div>


        <div className="col-8">
          <h1>{props.name}</h1>
          <p>{props.tagline}</p>
          <p>Author: {props.contributed_by}</p>
        </div>
      </div>
    </div>
  </Link>
    
  )
}


export default BeerItem;
