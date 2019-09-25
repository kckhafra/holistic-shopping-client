import React from 'react';
import productsApiServices from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
import NoSearchHeader from '../../Components/Header/NoSearchHeader'
import config from '../../config'
import TokenService from '../../services/token-service'
import './MyProductPage.css'

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
                <NoSearchHeader />
                <div className = "myProdList_container">
                <h2>Manage Your Products</h2>
                <div >
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
                            <h4> {product.product_category}</h4>
                            <p>{product.description}</p>
                        
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
            </div>
        )
    }
}