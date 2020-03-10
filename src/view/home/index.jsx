import React, { Component } from 'react'
import { Link } from 'react-router-dom';


/*Components*/
import HomeSection from '../../components/homeSections';



export default class Home extends Component {
  render() {
    return (
      <section className="container">
        <Link to={'all'}>
          <HomeSection 
          title="All Beers"
            img="../../../images/beers.png"
          />
        </Link>
        

        <Link to={'random'}>
          <HomeSection title="Random Beers"
            img="../../../images/random-beer.png"
          />
        </Link>
        
        <Link to={'new'}>
          <HomeSection title="New Beer"
            img="../../../images/new-beer.png"
          />
        </Link>
        
      </section>
    )
  }
}
