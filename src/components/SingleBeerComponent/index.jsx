import React from 'react';

const SingleBeerComponent = (props) => {
  return (<div className="container">
          <div className="row">
            <div className="col">
              <img src={props.image_url} alt={props.name} />
              <h1>{props.name}</h1>
              <small>{props.tagline}</small>
              <p>{props.attenuation_level}</p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>);
};


export default SingleBeerComponent;
