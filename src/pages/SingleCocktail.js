import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

const [loading, setLoading] = useState(false)
const [cocktail, setCocktail] = useState(null)
const {id} = useParams()

useEffect(() =>{
  async function getCocktail(){
    setLoading(true)
    try{
      const response = await fetch(`${url}${id}`)
      const data = await response.json()
      if(data.drinks){
        const {
          strDrink: name,
          strDrinkThumb:image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          dateModified:date,
          strCreativeCommonsConfirmed: command,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6

        } = data.drinks[0]

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6
        ]

       const newCocktail = {
         name,
         image,
         info,
         category,
         glass,
         instructions,
         ingredients,
         command,
         date
       }

       setCocktail(newCocktail)
        
      }else{
        setCocktail(null)
      }
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
  }
  getCocktail()
},[id])


if(loading){
  return <Loading/>
}

if(!cocktail){
  return <h2 className='section-title'>No cocktail to display with this id</h2>
}

const { 
  name,
  image,
  info,
  category,
  glass,
  instructions,
  command,
  date,
  ingredients} = cocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back to home
      </Link>
      <h2 className='section-title'>{name}</h2>
     <div className='drink'>
       <img src={image} alt={name} className='' />
       <div className='drink-info'>
         <p>
           <span className='drink-data'>Name: </span>
           {name}
         </p>
         <p>
           <span className='drink-data'>Info: </span>
           {info}
         </p>
         <p>
           <span className='drink-data'>Category: </span>
           {category}
         </p>
         <p>
           <span className='drink-data'>Glass: </span>
           {glass}
         </p>
         <p>
           <span className='drink-data'>instructions: </span>
           {instructions}
         </p>
         <p>
           <span className='drink-data'>command: </span>
           {command}
         </p>
         <p>
           <span className='drink-data'>Date: </span>
           {date}
         </p>
         <p>
           <span className='drink-data'>ingredients</span>
            {ingredients.map((item, index) =>{
              return item ? <span key={index}>{item}</span> : ''
            })}
         </p>
       </div>
     </div>
    </section>
  )
}

export default SingleCocktail
