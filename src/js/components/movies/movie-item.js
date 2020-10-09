import React from 'react';

const MovieItem = ({ movie, index, toggleMovieModal, setActiveMovie }) => {
    const { title, poster_path } = movie;
    const imgUrl = `http://image.tmdb.org/t/p/w200${poster_path}`;
    const toggleModal = (e) => {
        e.preventDefault();
        toggleMovieModal();
        setActiveMovie(movie, index);
    };
    return (
        <div className="movie-item">
            { poster_path && <img src={imgUrl} alt={title} /> }
            { !poster_path && <div className="no-image">{title}</div> }
            <a
                href="#"
                onClick={toggleModal}
                className="movie-title-wrapper"
            >
                <h2>{title}</h2>
            </a>
        </div>
    )
};

export default MovieItem;