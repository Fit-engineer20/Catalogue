import React, {useState, useEffect} from 'react'
import Search from '../search/SearchBar'
import './navbar.css'

const Navbar = ({ handleFilter, allData, setData, category, setCat }) => {
    
    const getData = async ()=>{
        const response =  await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCat(data);
    }

    useEffect(() => {
     getData();
    },[])

    const [currInput, setCurrinput] = useState("");
    const [isWritten, setWritten]= useState(false);

    const handleSearch = (event)=>{

        const word = event.target.value;
        setCurrinput(word);
        if(word!="")
        {
            setWritten(true);
        }
        else
        {
            setWritten(false);
        }
        const filtered = allData.filter( (curr) => {
        return  ( curr.title.toLowerCase().includes(word.toLowerCase()) || curr.category.toLowerCase().includes(word.toLowerCase()) );
        }
        );
        setData(filtered);
    };

    const clearInput = () => {
        setData(allData);
        setCurrinput("");
        setWritten(false);
    };

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <div className="container-fluid d-flex justify-content-between main_container">

            <div className="logo">
            <a className="navbar-brand" href="#">Catalogue</a>
            </div>

            <div className="d-flex ms-auto justify-content-between drop-search-div">

                <select class="form-select" aria-label="Default select example" onChange={handleFilter}>
                    <option selected>All</option>
                    { category.map((curr, index)=>{
                        return <option key={index} value={curr}>{curr}</option>
                    }) }
                </select>

                <Search
                currInput={currInput} 
                isWritten={isWritten} 
                handleSearch={handleSearch} 
                clearInput={clearInput}  
                /> 

            </div>
        </div>    
        </nav>  
        </>
    )
}

export default Navbar
