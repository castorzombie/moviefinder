import React, { Component } from 'react'
import noImg from '../img/icon-no-image.svg';

import { connect } from 'react-redux';
import {showDetails} from '../actions/moviesActions' 

 class Details extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      poster_path: '',
      overview: '',
      popularity: '',
      release_date:''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showDetails(id);
  }

  componentWillReceiveProps(nextProps){
    const {id, poster_path, title, overview, popularity, release_date} = nextProps.movie;
    this.setState({
        id,
        poster_path,
        title: title,
        release_date,
        overview,
        popularity
    });
 } 

  render() {

    const {poster_path, title, overview, popularity, release_date} = this.state;
    let dropImg = '';
    poster_path === null ? dropImg = noImg : dropImg = `https://image.tmdb.org/t/p/w500/${poster_path}`
    
    return (
      <React.Fragment>
      <div className="articles">
        <article className="movie-flex">
            <img src={dropImg} alt={title} title={title} />
            <div className="movie-content">
                <h3>{title}</h3>
                <p>Release date: <span class="purp-color">{release_date}</span></p>
                <p>Overview: <span class="purp-color">{overview}</span></p>
                <p>Popularity: <span class="purp-color">{popularity}</span></p>
            </div>
        </article>
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie
})
export default connect(mapStateToProps, {showDetails})(Details)
