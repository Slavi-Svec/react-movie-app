import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MoviesList from './components/MoviesList'
import ListHeadings from './components//ListHeadings'
import SearchInput from './components/SearchInput'

const App = () => {
    const [movies, setMovies] = useState([])
    const[searchValue, setSearchValue] = useState(' ')

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=terminator&apikey=77308b20`

		const response = await fetch(url)
		const responseJson = await response.json()

		if (responseJson.Search) {
			setMovies(responseJson.Search)
		}
	};

	useEffect(() => getMovieRequest(), [])

	return (
	<div className='movie container-fluid '>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<ListHeadings heading='Movies' />
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MoviesList movies={movies} />
			</div>
		</div>
	)
}

export default App

