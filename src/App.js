import React,{useEffect, useState} from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';

const API_KEY=process.env.REACT_APP_OMDB_API

function App() {
  const[movies,setMovies]=useState([])
  const [searchMovie, setSearchMovie] = useState('matrix')
  
  const [filterType, setFilterType] = useState('all')
  
const handlechangeMovie=(e)=>{

}

  useEffect(()=>{
    console.log(API_KEY)
      fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}${filterType!=='all' ? `&type=${filterType}`:''}`).then(response=>{
          return response.json()
      }).then(resData=>{
          
          setMovies(resData.Search)
      })
  },[filterType,searchMovie])
  
  
  
  return (
    <div className="App">
      <Header 
      handlechangeMovie={handlechangeMovie}
     setSearchMovie={setSearchMovie}
      filterType={filterType}
      setFilterType={setFilterType}
      />
      <Main movies={movies}/>
      
    </div>
  );
}

export default App;
