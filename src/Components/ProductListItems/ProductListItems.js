import React from 'react'
import {Link} from 'react-router-dom'
import './ProductListItems.css';


export default class ProductListItems extends React.Component{
    
    render(){
        const {product} = this.props
        
        return(
            <div className="product_item_container">
                <div className="border">
                <Link 
                    aria-label="More information about product and the seller of the product"
                    className="prod_links"
                    to={`/product/${product.id}`}>
                    
                
                <main>
                <div>
                    <img className="prod_img" src={`${product.images}`} alt="seller images"/>
                    <header className='ProductItem_header'>
                        <h2 className='productItem_h2'>
                            {product.service_name}
                        </h2>
                    </header>
                    <h3 className="price">{`$${product.price}`}</h3> 
                    <h3>There are {" "}<span>{product.remaining_inventory}</span> remaining</h3>
                    <h3> {" "}<span>{product.product_category}</span></h3>
                    
                    
                </div>
                
                      
                </main>
                </Link>    
                </div>
            </div>
            
        )
    }
}