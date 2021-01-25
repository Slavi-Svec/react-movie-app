import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MoviesList from './components/MoviesList'

const App = () => {
	const [movies, setMovies] = useState([  {
            "Title": "Inception",
            "Year": "2010",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
            "Title": "Inception",
            "Year": "2010",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        "Title": "Inception",
        "Year": "2010",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    }])

        return (
          <div className='container-fluid movies-app-view'>
            <div className='row'>
              <MoviesList movies={movies} />
            </div>
          </div>
        )
    }

      export default App

