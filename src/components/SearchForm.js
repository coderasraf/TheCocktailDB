import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {

const {searchTerm, setSearchTerm} = useGlobalContext()
const searchValue = useRef('')


const searchCocktail = (e) =>{
  setSearchTerm(searchValue.current.value)
}

const handleSubmit = (e) =>{
  e.preventDefault()
}

useEffect(() =>{
  searchValue.current.focus()
},[])

  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite cocktail!!</label>
          <input 
            type='text' 
            placeholder='Search with name' 
            onChange={searchCocktail}
            ref={searchValue} id='name' />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
