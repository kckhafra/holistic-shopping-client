import React from 'react';
import productsApiServices from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
const uuid = require('uuid')


export default class ProductPage extends React.Component{
    static defaultProps = {
        match: {params: {}}
    }

    static contextType = ProductContext
    
    componentDidMount(){
        const {productId} = this.props.match.params
        
        productsApiServices.getProductsById(productId)
            .then(this.context.setProduct)
            
    }
    componentWillUnmount(){
        this.context.clearProduct()
    }
    render(){
        const {product} = this.context
        console.log(this.context.product)
        return(
            <div >
                {product.map((product, index)=>{
                   
                    return(
                    <div key={uuid}>
                        <h2>{product.service_name}</h2>
                        <p>{product.description}</p>
                    </div>
                        )
                })}
                
            </div>
        )
    }
}