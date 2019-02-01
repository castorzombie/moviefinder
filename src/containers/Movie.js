import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import noImg from '../img/icon-no-image.svg';

class Movie extends Component {

  showMovieInfo = () => {
    const { id } = this.props.info;
    this.props.movieInfo(id);
  }

  render() {  
    const {id, overview, backdrop_path, release_date, title} = this.props.info;
    let dropImg = '';
    backdrop_path === null ? dropImg = noImg : dropImg = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    
    return (

      <article className="article-flex">
        <img src={dropImg} alt={title} title={title} />
        <div className="article-content">
            <h3>{title}</h3>
            <p>Release date: <span>{release_date}</span></p>
            <div className="limited-text">{overview}...</div>
        </div>
        <Link to={`movies/details/${id}`} className="article-btn">Read More</Link>
      </article>

    )
  }
}

export default Movie ;
