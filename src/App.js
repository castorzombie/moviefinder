import React, { Component } from 'react';
import Header from './components/Header';
import Movies from './containers/Movies';
import Details from   './containers/Details';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

//redux
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  homeBack = () => {
    this.setState({
      redirect: true
    })
  }
 
  render() {
    
    const { redirect } = this.state;
    if ( redirect ) {
      return <Redirect to='/'/>;
    }

    return (
      <Provider store = { store } >
      <Router>
      <React.Fragment>
        <div className = "container">
          <Header home = { this.homeBack } />
          <main>
            <Switch>
              <Route exact path="/" component = { Movies } />
              <Route exact path="/Movies/details/:id" component = { Details } />
            </Switch>
          </main>
        </div>
        <Footer />
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
