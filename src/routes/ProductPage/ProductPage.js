import React from 'react';
import productsApiServices from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
import Navigation from '../../Components/Navigation/Navigation'
import './ProductPage.css'

const uuid = require('uuid');



export default class ProductPage extends React.Component{
    static defaultProps = {
        match: {params: {}}
    }

    handleCancelClick = ()=>{
        this.props.history.push('/productsListPage')
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
        
        return(
            <div>
                <Navigation />
                <h2>Buy Product or Service</h2>
                <div >
                    {product.map((product, index)=>{
                    
                        return(
                        <div key={uuid}>
                            <div className="prodpage_container">
                                <h2>{product.service_name}</h2>
                                <p>{product.description}</p>
                                <p>Price: <span>{`$${product.price}`}</span></p>
                                <button>Buy</button>
                                <button
                                className="prod_button2" 
                                onClick={this.handleCancelClick}
                                type="button">
                                    Cancel
                                </button>
                            </div>
                        </div>
                            )
                    })}
                </div>
            </div>
        )
    }
}