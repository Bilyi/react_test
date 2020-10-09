import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, toggleMovieModal, setActiveMovie } from '../../state/movies/actions';

import Header from '../layouts/header';
import Pagination from '../layouts/pagination';
import MovieItem from './movie-item'
import ActiveMovieModal from '../layouts/active-movie-modal';

const Movies = ({ movies, fetchData, toggleMovieModal, setActiveMovie }) => {
    const { isActiveModal, results } = movies;
    const addBodyClass = className => document.body.classList.add(className);
    const removeBodyClass = className => document.body.classList.remove(className);

    useEffect(() => {
        fetchData();
    }, []);


    useEffect(() => {
        if(isActiveModal) {
            addBodyClass('active-modal');
        } else {
            removeBodyClass('active-modal');
        }

    }, [isActiveModal]);

    return (
        <div className="page-wrapper">
            <Header/>
            <h2 className="releases-title">Last Releases</h2>
            <div className="movies-wrapper">
                { results && results.length ? (
                        results.map((movie, index) => {
                            return (
                                <MovieItem
                                    toggleMovieModal={toggleMovieModal}
                                    setActiveMovie={setActiveMovie}
                                    key={movie.id}
                                    index={index}
                                    movie={movie}
                                />
                            );
                        })
                    ) : null
                }
            </div>
            <Pagination movies={movies} fetchData={fetchData}/>
            <ActiveMovieModal/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: bindActionCreators(fetchData, dispatch),
        toggleMovieModal: bindActionCreators(toggleMovieModal, dispatch),
        setActiveMovie: bindActionCreators(setActiveMovie, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);