import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showPopular, showMovies } from '../actions/moviesActions' 

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
    if (window.location.pathname !== "/") {
      return window.location.href = '/'
     }else {
    itemSearch !== '' ?  
      this.props.showMovies(itemSearch):
      this.props.showPopular();
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
export default connect(mapStateToProps, {showPopular, showMovies})(Moviesbtn);


