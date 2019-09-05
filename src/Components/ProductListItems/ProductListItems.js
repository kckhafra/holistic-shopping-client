import React from 'react'
import {Link} from 'react-router-dom'
import { privateEncrypt } from 'crypto';
import './ProductListItems.css';
import Config from '../../config'
import TokenService from '../../services/token-service'

export default class ProductListItems extends React.Component{

    render(){
        const {product} = this.props
        
        return(
            <div className="product_item_container">
                <div>
                <Link to={`/product/${product.id}`}>
                    <header className='ProductItem_header'>
                        <h2 className='productItem_h2'>
                            {product.service_name}
                        </h2>
                    </header>
                </Link>
                <main>
                <div>
                    <h4>Price: {" "}<span>{`$${product.price}`}</span></h4> 
                    <h4>Inventory: {" "}<span>{product.remaining_inventory}</span></h4>
                    <h4>Category: {" "}<span>{product.product_category}</span></h4>
                    
                            
                </div>
            </main>
                    
                </div>
            </div>
            
        )
    }
}