import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeadings'
import SearchInput from './components/SearchInput'
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'
import PlaceHolderUrl from './components/PlaceHolderUrl'

const App = () => {
	const [movies, setMovies] = useState(PlaceHolderUrl)
	const [favourites, setFavourites] = useState([])
	const [searchValue, setSearchValue] = useState('')

	const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
        const response = await fetch(url)
        const responseJson = await response.json()

			if  (responseJson.Search) {
            setMovies(responseJson.Search)
            console.log(responseJson.Search)

		}
	}

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue])

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
        )

		setFavourites(movieFavourites)
	}, [])

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
	}

	const addMovieToFavourites = (movie) => {
		const newFavouriteList = [...favourites, movie]
		setFavourites(newFavouriteList)
		saveToLocalStorage(newFavouriteList)
	}

	const removeMovieFromFavourites = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		)

		setFavourites(newFavouriteList)
		saveToLocalStorage(newFavouriteList)
	}

	return (
		<div className='container-fluid movie'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movie Catalogue ' />
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addMovieToFavourites}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeMovieFromFavourites}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	)
}

export default App