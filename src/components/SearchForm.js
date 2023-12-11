import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../cocktailsContext'

const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  })

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className="search-form">
        <div className='form-control'>
          <label htmlFor='name'>
            search
          </label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktails} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
