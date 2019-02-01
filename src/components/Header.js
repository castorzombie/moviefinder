import React, { Component } from 'react'
import Moviesbtn from '../containers/Moviesbtn';
import logo from '../logo.svg';

class Header extends Component {
  
  render() {
    return (

      <header>
        <img className="logo" src={logo} alt="movies"/>
        <div className="titlehead">
          <h1>Create your list and find a MOVIE</h1>
        </div>
        <Moviesbtn />
      </header>
      
    )
  }

}
export default Header;
