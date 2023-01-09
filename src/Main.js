import { Button,Card } from 'react-bootstrap'
import React,{useEffect, useState} from 'react'
import Movies from './components/Movies'
import Search from './components/Search'
import Page404 from './components/Page404'

function Main({movies}) {
   
   if(!movies){
    return <Page404/>
   }
    
  return (
    <main className='main'>
    
   <Movies movies={movies}/>
    </main>
  )
}

export default Main