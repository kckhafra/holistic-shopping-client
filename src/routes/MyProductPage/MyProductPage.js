import React from 'react';
import productsApiServices from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
import Navigation from '../../Components/Navigation/Navigation'
import config from '../../config'
import TokenService from '../../services/token-service'

const uuid = require('uuid');



export default class MyProductPage extends React.Component{
    static defaultProps = {
        match: {params: {}}
    }
    static contextType = ProductContext

   

   
    
    
    componentDidMount(){
        const {productId} = this.props.match.params
        
        productsApiServices.getProductsById(productId)
            .then(this.context.setProduct)
            
    }
    handleEdit = ()=>{
        const {productId}= this.props.match.params
        this.props.history.push(`/edit/${productId}`)
    }

    handleCancelClick = ()=>{
        this.props.history.push('/MyProducts')
    }

    onClickDelete = ()=> {
        this.props.history.push('/myProducts')
    }

    handleClickDelete = (e)=>{
        e.preventDefault()
        const {productId} = this.props.match.params
        
        
        fetch(`${config.API_ENDPOINT}/products/${productId}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(()=>{
            this.context.deleteMyProduct(productId)
            this.onClickDelete()
            
        })
        
        
        .catch(error=>{
            console.log({error})
        })
    }


    componentWillUnmount(){
        this.context.clearProduct()
    }
    render(){
        const {product} = this.context
        
        return(
            <div>
                <Navigation />
                <h2>Manage Your Products</h2>
                <div >
                    {product.map((product, index)=>{
                    
                        return(
                        <div key={uuid}>
                            <div className="prodpage_container">
                                <h2>{product.service_name}</h2>
                                <p>{product.description}</p>
                                <p>Price: <span>{`$${product.price}`}</span></p>
                                <button
                                    onClick={this.handleClickDelete}
                                    className="item_button item_button1">
                                Delete
                                </button> 
                                <button
                                    onClick={this.handleEdit}
                                    className="item_button item_button2">
                                        Edit
                                </button> 
                                       
                            </div>
                            <div>
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