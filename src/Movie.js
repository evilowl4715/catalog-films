import React from "react";
import PropTypes from 'prop-types';
import './App.css'

function Movie({id, title, summary, poster, year}) {
    return (
        <div className="movie">
            <div className="movie__block">
                <div className="movie__preview">
                    <img src={poster} />
                </div>
                <div className="movie__title">
                    <h3>{title}</h3>
                </div>
                <div className="movie__year">
                    {year}
                </div>
                <div className="movie__summary">
                    {summary.slice(0, 140)}...
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}


export default Movie;