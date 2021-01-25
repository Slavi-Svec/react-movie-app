import React from 'react';

const SearchInput = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                onChange={(event) => props.setSearchValue(event.target.value)}
                className='from-control'
                value={props.value}
                placeholder='Search Movies Here...'
            ></input>
        </div>
    )
}

export default SearchInput
