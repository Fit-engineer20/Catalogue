import React, {useState} from 'react'
import './product.css';
const ProductCard = (props) => {
   
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    }

    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top p-3" alt="Products" />
            <h6 className="category p-2">{props.category}</h6>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                  {isReadMore ? props.desc.slice(0,150) : props.desc}
                  <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? "...read more" : " show less"}
                  </span>
                </p>

                <i className="fas fa-rupee-sign price">{`  ${props.price}`}</i>

                <div className="d-flex justify-content-between my-3">

                 <div className="d-flex justify-content-evenly align-items-center">
                 <i className="fas fa-star"></i>
                 &nbsp;
                 <h6 style={{marginBottom:"0px"}}>{`Rating: ${props.rating}`}</h6>
                 </div>

                 <div className="d-flex justify-content-evenly align-items-center">
                 <i className="fas fa-users"></i>
                 &nbsp;
                 <h6 style={{marginBottom:"0px"}}>{`Rated by: ${props.rated}`}</h6>
                 </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductCard
