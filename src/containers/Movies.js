import React, { Component } from 'react'
import Movie from '../containers/Movie';

import { connect } from 'react-redux';
import { showMovies } from '../actions/moviesActions' 

 class Movies extends Component {

  render() {
    const {results} = this.props.movies;
    console.log(results);
    return (

        <React.Fragment>
            { 
            results !== undefined ? <h2 className ="listReady">Movie List</h2> 
            : <h2 className ="listEmpty">List is empty</h2>
            }
            <div className="articles">
                {
                results !== undefined ?
                results.map(movie => (
                    <Movie key={movie.id} info={movie} />                 
                )):''
                }
            </div>
        </React.Fragment>
        
        )
    }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})
export default connect(mapStateToProps, {showMovies})(Movies);
