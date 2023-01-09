import React from 'react'
import Search from './components/Search'

function Header({searchMovies,filterType,setFilterType, setSearchMovie,handlechangeMovie}) {
  return (
    <header className='main-header'>
        <div className='logo'>OMDB</div>
        <Search searchMovies={searchMovies}
        filterType={filterType}
        setFilterType={setFilterType}
        setSearchMovie={setSearchMovie}
        handlechangeMovie={handlechangeMovie}
        />
    </header>
  )
}

export default Header