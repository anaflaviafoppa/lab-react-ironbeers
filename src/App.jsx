import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


/*VIEWS*/
import Home from './view/home';
import AllBeers from './view/all';
import SingleBeer from './view/single';
import NewBeer from './view/new';
import RandomBeer from './view/random';

class App extends Component {
  constructor(){
    super();
    this.state={
      navBarDisplay: false,
    }
  };

  showNavBar(){
    this.setState( previousState => ({
      navBarDisplay: !previousState.navBarDisplay
    }));
  }

 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path='/all' component={AllBeers} exact />
            <Route path="/random" component={RandomBeer} exact />
            <Route path='/new' component={NewBeer} exact />
            <Route path='/:id' component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
