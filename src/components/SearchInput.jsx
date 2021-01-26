import React from 'react';

const SearchInput = (props) => {
    return (
        <section className='col col-sm-4'>
            <input
                onChange={(event) => props.setSearchValue(event.target.value)}
                className='form'
                value={props.value}
                placeholder='Search Movies Here...'
            >
            </input>
        </section>
    )
}

export default SearchInput
