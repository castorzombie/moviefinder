import React, { Component } from 'react';

import { connect } from 'react-redux';
import { showPopular, showMovies } from '../actions/moviesActions' 

export class Moviesbtn extends Component {
  
  constructor() {
    super();
    this.state = {
      movieSearch: '',
      defaultText: 'Type your search'
    }
  }

  movieSearch = (e) => {
    this.setState({
      movieSearch: e.target.value
    })
  }

  getSearch = (e) => {
    e.preventDefault();
    const itemSearch = this.state.movieSearch;
    localStorage.setItem("search", itemSearch);
    window.location.pathname !== "/" ?
       window.location.href = '/' : 
       this.getMovieList(itemSearch);
  }

  getMovieList = (itemSearch) => {
    itemSearch !== '' ?  
      this.props.showMovies(itemSearch):
      this.props.showPopular();
  }

  render() {
    return (
      
      <React.Fragment>
        <form onSubmit={this.getSearch}>
          <div className="movieitemform">
            <input onChange={this.movieSearch} placeholder={this.state.defaultText} className="inputron"></input>
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


