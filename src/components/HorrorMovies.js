import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const HorrorMovies = (props) => {
    const movieCards = props.movies.map(m => <MovieCard movie={m} key={m.id}/>)
    return (
        <div>
            { movieCards }
        </div>

    )
}

const mapStateToProps = state => {
    return {
        movies: state.horrorMovies
    } 
}

export default connect(mapStateToProps)(HorrorMovies);