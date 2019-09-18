import React from 'react';
import ProductsApiService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import ProductListItem from '../../Components/ProductListItems/ProductListItems'
import Navigation from '../../Components/Navigation/Navigation'
import {Link} from 'react-router-dom'
import "./ProductsListPage.css"
const uuid = require('uuid')

export default class ProductsListPage extends React.Component{
    
    static contextType = ProductListContext

    componentDidMount(){
        ProductsApiService.getProducts()
            .then(this.context.setProductList)
            
            .catch(error =>{
                console.log({error});
            })
    }

    
    
    

    renderProductsList(){
        
        return this.context.productList.map(product=>
            <ProductListItem
                key={uuid}
                product={product}/>
        )   
    }

    render(){
        return (<div>
                    <Navigation />
                    <h2>Holistic Products for Sale</h2>
                    <h3>
                        Shop for your favorite holistic products, services or recipes.  
                    </h3>
                    <div className="ProdPage-LinkCon">
                    
                        <Link 
                            className="prodpg-links addProducts-link"
                            to="addProduct">Add Products</Link>
                    
                    
                        <Link 
                             className=" prodpg-links myProducts-link"
                            to="myProducts">My Products</Link>
                    
                    </div>
                    <section className="productListPage_itemContainer"> 
                        {this.renderProductsList()}
                    </section>
                </div>
            
        )
    }
}