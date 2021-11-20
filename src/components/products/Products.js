import React, {useEffect} from 'react';
import Card from './ProductCard';

const Products = ({data, setData, setAllData}) => {
    

    const getProductDetails = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const details = await response.json();
        setData(details);
        setAllData(details);
    } 

    useEffect(() => {
      getProductDetails();  
    }, [])


    const getCards = (curr)=>{
      return <Card
              key = {curr.id}
              title = {curr.title}
              desc = {curr.description}
              price = {curr.price}
              category = {curr.category}
              img = {curr.image}
              rating = {curr.rating.rate}
              rated = {curr.rating.count} 
              />
    }

    return (
        <div>
            <div className="container">
            <div className="row my-5">
                {data.map(getCards)}
            </div>
            </div>
        </div>
    )
}

export default Products
