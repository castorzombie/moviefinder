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
  render() {
    return (
      <Provider store={store}>
      <Router>
      <React.Fragment>
        <div className="container">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Movies} />
              <Route exact path="/Movies/details/:id" component={Details} />
              <Redirect to='/' />
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
