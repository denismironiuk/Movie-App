import React from 'react'
import Movie from './Movie'

function Movies({movies}) {
    console.log(movies)
  return (
    <div className='movies'>
        {movies.map(movie=>{
            return <Movie
            key={movie.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            />
        })}
    </div>
  )
}

export default Movies