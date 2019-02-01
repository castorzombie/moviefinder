import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showMovies } from '../actions/moviesActions' 

export class Moviesbtn extends Component {
  
  constructor() {
    super();
    this.state = {
      movieSearch: ''
    }
  }

  movieSearch = (e) => {
    this.setState({
      movieSearch: e.target.value
    })
  }

  getMovieList = (e) => {
    e.preventDefault();

    const itemSearch = this.state.movieSearch;
    if(itemSearch !== undefined) { 
      this.props.showMovies(this.state.movieSearch);
    }
    this.renderRedirect();
  }

  renderRedirect = () => {
    console.log( window.location.href)
    console.log(window.location.pathname === "/")
    if (window.location.pathname !== "/") {
     return  window.location.href = '/'
    }
  }

  render() {
    return (
      
      <React.Fragment>
        <form onSubmit={this.getMovieList}>
          <div className="movieitemform">
            <input onChange={this.movieSearch}  className="inputron"></input>
          </div>
          <div className="movieitemform">
            <button type="submit" value="Submit" className="buttron">Check Movie List</button>
          </div>
        </form>
      </React.Fragment>

    )
  }
  
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});
export default connect(mapStateToProps, {showMovies})(Moviesbtn);


