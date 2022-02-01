import React from 'react';

const Product = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="col">
               <div className="card" style={{height:'350px'}}>
                   <img src={item.image} className="card-mg-top" style={{height:'100px',width:'70%',marginLeft:'10%'}}/>
                   <div className="card-body">
                       <h5 className="card-title">{item.name}</h5>
                       <p className="card-text">{item.description}</p>
                       <p className="card-text">Rs. {item.cost}</p>
                       <p className="card-text">Use: {item.uses}</p>

                   </div>
               </div>
            </div>
        )
    })

    console.log(props)
    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
      
    )
}

export default Product;