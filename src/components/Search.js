import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Search({ searchMovies,filterType,setFilterType, setSearchMovie,handlechangeMovie }) {
    
    
   
    const handleKey = (e) => {
     
        if (e.key === 'Enter') {
            searchMovies(filterType)
            
        }
    }
    const handleFilter=(e)=>{
        setFilterType(e.target.value)
    }
    return (
        <div className='form'>
            <div className='form-search'>
                <input
                    type='text'
                   
                    className='form-control'
                    onChange={(e) => setTimeout(()=>{
                        setSearchMovie(e.target.value ?e.target.value:'matrix')

                    },3000) }
                    onKeyDown={handleKey}
                />
               

            </div>
            <div className='radio-container'>
                <label>
                    <input className='filter ' type={'radio'} value='all'   checked={filterType==='all'} onChange={handleFilter}/>
                    <span className={filterType === 'all' ? 'active' : ''} style={{ color: 'grey' }}>All</span>
                </label>
                <label>
                    <input className='filter' type={'radio'} value='movie' onChange={handleFilter} checked={filterType==='movie'} />
                    <span className={filterType === 'movie' ? 'active' : ''} style={{ color: 'grey' }}>Movies</span>
                </label>
                <label>
                    <input className='filter' type={'radio'} value='series' onChange={handleFilter} checked={filterType==='series'} />
                    <span className={filterType === 'series' ? 'active' : ''} style={{ color: 'grey' }}>Series</span>
                </label>
            </div>
        </div>
    )
}

export default Search