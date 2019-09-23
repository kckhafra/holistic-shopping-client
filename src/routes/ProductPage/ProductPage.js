import React from 'react';
import productsApiServices from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
import './ProductPage.css'
import Header from '../../Components/Header/Header'



const uuid = require('uuid');



export default class ProductPage extends React.Component{
    static defaultProps = {
        match: {params: {}}
    }

    static contextType = ProductContext

    handleBuy = ()=>{
        this.props.history.push('/CheckoutPage')
    }

    handleCancelClick = ()=>{
        this.props.history.goBack()
    }
   
    
    componentDidMount(){
        const {productId} = this.props.match.params
        
        productsApiServices.getGuestProductsById(productId)
            .then(this.context.setProduct)
            
    }
    componentWillUnmount(){
        this.context.clearProduct()
    }
    render(){
        const {product} = this.context
        
        return(
            <div>
                <Header/>
                <h2 className="title_prod">Buy Product or Service</h2>
                <div className="prodList_container">
                    {product.map((product, index)=>{
                    
                        return(
                        <div key={uuid}>
                            <div className="prodpage_container">
                            <img className="prod_img" src={`${product.images}`} alt="seller images"/>
                            <div className="Prod_info"> 
                            <header className='ProductItem_header'>
                                <h2 className='productItem_h2'>
                                {product.service_name}
                                </h2>
                            </header>
                            <h4 className="price">{`$${product.price}`}</h4> 
                            <h4>There are {" "}<span>{product.remaining_inventory}</span> remaining</h4>
                            <h4> {" "}<span>{product.product_category}</span></h4>
                                <button
                                onClick={this.handleBuy}
                                >Buy</button>
                            </div>
                            </div>
                                <button
                                className="prod_button2" 
                                onClick={this.handleCancelClick}
                                type="button">
                                    Cancel
                                </button>
                            </div>
                        
                            )
                    })}
                </div>
            </div>
        )
    }
}