import React from 'react';
import ProductsApiService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import ProductListItem from '../../Components/ProductListItems/ProductListItems'
import Navigation from '../../Components/Navigation/Navigation'


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
                key={product.id}
                product={product}/>
        )   
    }

    render(){
        return (<div>
                    <Navigation />
                    <section> 
                        {this.renderProductsList()}
                    </section>
                </div>
            
        )
    }
}