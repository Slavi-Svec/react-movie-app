import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MoviesList from './components/MoviesList'
import ListHeadings from './components//ListHeadings'
import SearchInput from './components/SearchInput'
import AddFavourite from './components/AddFavourite'

const App = () => {
	const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [favourites, setFavourites] = useState([])


	const getMoviesRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
		const response = await fetch(url)
		const responseJson = await response.json()

		if (responseJson.Search) {
		    return	setMovies(responseJson.Search)
		}
    }

    const addFavouriteMovieFromList = (movie)   => {
        const AddedFavourites = [...favourites, movie]
        setFavourites(AddedFavourites)
    }

	useEffect(() => getMoviesRequest(searchValue), [searchValue])

	return (
	<div className='movie container-fluid '>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<ListHeadings heading='Movies'  />
				<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MoviesList
                   movies={movies}
                   FavouritesComponent ={AddFavourite}
                   handleFavouritesClick={addFavouriteMovieFromList}
             />
			</div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
				<ListHeadings heading='Favourites' />
            </div>
                <div className='row'>
                    <MoviesList movies={favourites} FavouritesComponent={AddFavourite} />
            </div>
		</div>
	)
}

export default App