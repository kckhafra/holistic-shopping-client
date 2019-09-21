import React from 'react'
import {Link} from 'react-router-dom'
import './MyProductItems.css'





export default class MyProductItems extends React.Component{
    render(){
        const {product} = this.props
        
        
        return(
            <div className="product_item_container">
                <div className="border">
                <Link 
                    className="prod_links"
                    to={`/product/my/${product.id}`}>
                    
                
                <main>
                <div>
                    <img className="prod_img" src={`${product.images}`}/>
                    <header className='ProductItem_header'>
                        <h2 className='productItem_h2'>
                            {product.service_name}
                        </h2>
                    </header>
                    <h4 className="price">{`$${product.price}`}</h4> 
                    <h4>There are {" "}<span>{product.remaining_inventory}</span> remaining</h4>
                    <h4> {" "}<span>{product.product_category}</span></h4>
                    
                    
                </div>
                
                      
                </main>
                </Link>    
                </div>
                </div>
            // <div className="product_item_container">
            //     <div>
            //     <Link to={`/product/my/${product.id}`}>
            //         <header className='ProductItem_header'>
            //             <h2 className='productItem_h2'>
            //                 {product.service_name}
            //             </h2>
            //         </header>
            //     </Link>
            //     <main>
            //         <div>
            //         <img className="prod_img" src={`${product.images}`}/>
            //         <header className='ProductItem_header'>
            //             <h2 className='productItem_h2'>
            //                 {product.service_name}
            //             </h2>
            //         </header>
            //         <h4 className="price">{`$${product.price}`}</h4> 
            //         <h4>There are {" "}<span>{product.remaining_inventory}</span> remaining</h4>
            //         <h4> {" "}<span>{product.product_category}</span></h4>
                        
                                
            //         </div>
            //     </main>
                    
            //     </div>
            // </div>
            
        )
    }
}