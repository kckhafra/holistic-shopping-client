import React from 'react'
import {Link} from 'react-router-dom'
import { privateEncrypt } from 'crypto';

export default class ProductListItems extends React.Component{
    render(){
        const {product} = this.props
        
        return(
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
                        <h4>Sales Price</h4> 
                        {product.price}
                        <h4>Inventory</h4>
                        {product.remaining_inventory}
                        <h4>Description</h4>
                        {product.description}
                        <h4>Category</h4>
                        {product.product_category}
                    </div>
                </main>
            </div>
            
        )
    }
}