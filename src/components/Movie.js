import React from 'react'
import {Card} from 'react-bootstrap'

function Movie({Poster,Title,Year,Type}) {
  return (
    <Card style={{padding:'0.35rem' }} className='Card' >
    <Card.Img  src={Poster=='N/A'? `https://via.placeholder.com/150/FFFFFF?text=  NOT    IMAGE   PROVIDED` : Poster}   />
    <Card.Body style={{padding:'0.35rem' }}>
        <Card.Title style={{textAlign:'center'}}>{Title}</Card.Title>
       
    </Card.Body>
   


</Card>
  )
}

export default Movie