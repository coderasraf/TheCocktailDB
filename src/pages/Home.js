import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <h1>I am from home page</h1>
      <SearchForm/>
      <CocktailList/>
      
    </main>
  )
}

export default Home
