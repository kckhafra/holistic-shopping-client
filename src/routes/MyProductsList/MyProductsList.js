import Config from '../../config'
import React from 'react'
import ProductsApiService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import ProductListItem from '../../Components/ProductListItems/ProductListItems'
import Navigation from '../../Components/Navigation/Navigation'
import TokenService from '../../services/token-service'
import MyProductItems from '../../Components/MyProductItems/MyProductItems'

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
                    <Navigation />
                    <h2>My Products</h2>
                    <section> 
                        {this.renderMyProductsList()}
                    </section>
                </div>
            
        )
    }
}