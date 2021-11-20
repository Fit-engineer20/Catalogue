import React, {useState} from 'react'
import './search.css';


const Searchbar = ({currInput, isWritten, handleSearch, clearInput}) => {

    return (
        <div className="search">
            <div className="searchInput">
            <input className="input" type="text" value={currInput} placeholder="Search your Item.." onChange={handleSearch} ></input>
            { isWritten==false ? <i className="fas fa-search Icon"></i> : <i className="fas fa-times Icon" style={{cursor:"pointer"}} onClick={clearInput}></i> }
            </div>   
        </div>
    )
}

export default Searchbar
