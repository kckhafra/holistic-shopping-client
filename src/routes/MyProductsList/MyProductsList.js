import NoSearchHeader from '../../Components/Header/NoSearchHeader'
import React from 'react'
import ProductsApiService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import MyProductsHeader from '../../Components/Header/MyProductsHeader'
import MyProductItems from '../../Components/MyProductItems/MyProductItems'
import {Link} from "react-router-dom"
import "./MyProductsList.css"
const uuid = require('uuid')


export default class MyProductListPage extends React.Component{

    
    static contextType = ProductListContext

    componentDidMount(){
        return ProductsApiService.getMyProducts()
        .then((products)=>{
            this.context.setMyProducts(products)
        })
            .catch(error =>{
                console.log({error});
            })
    }
    
    
    
    

    renderMyProductsList(){
        
        return this.context.myProducts.map(product=>
            <MyProductItems
                key={uuid}
                product={product}/>
                
        )   
        
    }

    render(){
        return (<div>
                    <NoSearchHeader />
                    <MyProductsHeader />
                    <div className="myProdList_container">
                    
                    
                    <div className="myProd-pContainer">
                        <p className="myProd-p">All of your products that you have for sell are displayed on this page. You can modify products by clicking the product you would like to modify. To post a new product for sell click <Link to="/addProduct">Add Product</Link></p>
                    </div>
                    
                    <section className="productListPage_itemContainer"> 
                    
                        {this.renderMyProductsList()}
                    </section>
                    </div>
                </div>
            
        )
    }
}