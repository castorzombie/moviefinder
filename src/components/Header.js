import React, { Component } from 'react'
import Moviesbtn from '../containers/Moviesbtn';
import logo from '../logo.svg';

import { connect } from 'react-redux';
import { showPopular } from '../actions/moviesActions';

class Header extends Component {

  renderRedirect = () => {
    if (window.location.pathname !== "/") {
      return window.location.href = '/'
     }
  }

  render() {

    return (

      <header>
        <img onClick={this.renderRedirect} className="logo" src={logo} alt="movies"/>
        <div className="titlehead">
          <h1>Create your list and find a MOVIE</h1>
        </div>
        <Moviesbtn />
      </header>
      
    )
  }

}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect( mapStateToProps, {showPopular})(Header);
