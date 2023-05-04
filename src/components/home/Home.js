import React from 'react'
import { Hero } from '../hero/Hero'
export const Home = ({movies}) => {
  return (
    <Hero movies = {movies}/>
    // <div>{movies.map((movie)=>{return <h1>{movie.title}</h1>})}</div>
  )
}
