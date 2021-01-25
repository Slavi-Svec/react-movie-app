import React from 'react'

const MoviesList = (props)  = {
    Return (
        <>
            {props.movies.map((movie, index) => <div>
                <img src={movie.poster} alt='movie'></img>
            </div>)}
        </> 
    )
}

export default MoviesList