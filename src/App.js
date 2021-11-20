import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Modal from './components/modal/Modal'
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [cat, setCat] = useState([]);
  const [currValue, setCurrValue] = useState("All");

  const handleFilter = (event) => {
    const category = event.target.value;
    setCurrValue(category);
    if(category==="All")
    {
      setData(allData);
    }
    else{
      const filtered = allData.filter((curr)=>{
        return (curr.category === category);
      });
      setData(filtered);
    }
 }

 const [show, setShow] = useState(false);

 const toggle = ()=>{
    setShow(!show);
 }


  return (
    <div className="App">
      <Navbar 
      handleFilter={handleFilter} 
      allData={allData}
      setData={setData}
      category={cat}
      setCat={setCat}
      currValue={currValue}
      setCurrValue={setCurrValue}
      />
      <button type="button" class="btn btn-dark analyse" onClick={toggle}>Analyse</button>
      {show && <Modal 
                category={cat}
                AllData={allData}
                toggle={toggle}
      />}
      <Products data={data} setData={setData} setAllData={setAllData} />
    </div>
  );
}

export default App;
