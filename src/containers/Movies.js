import React, { Component } from 'react'
import Movie from '../containers/Movie';

import { connect } from 'react-redux';
import { showPopular, showMovies } from '../actions/moviesActions' 

 class Movies extends Component {
    
   constructor() {
       super();
       this.state = {
           appTitle: 'Most Popular Movies'
       }
   } 
   
   componentDidMount() {
    this.props.showPopular();
  }

  render() {
    const {results} = this.props.movies;
    console.log(this.props)
    console.log(results);
    return (

        <React.Fragment>
            <h2 className ="listEmpty">{this.state.appTitle}</h2>
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
export default connect(mapStateToProps, {showPopular, showMovies})(Movies);
