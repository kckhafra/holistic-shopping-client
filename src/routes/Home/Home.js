import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'
import ProductListContext from '../../contexts/ProductListContext'
import ProductsApiService from '../../services/products-api-services'
import ProductListItem from '../../Components/ProductListItems/ProductListItems'
import Header from '../../Components/Header/Header'
import HomeImages from './Home-images'

const uuid = require("uuid")


export default class Home extends React.Component {
  static contextType = ProductListContext

    componentDidMount(){
        ProductsApiService.getGuestProducts()
            .then(
              this.context.setGuestProductList
              )
            
            .catch(error =>{
                console.log({error});
            })
    }

    renderProductsList(){
        
      return this.context.guestProducts.map(product=>
          <ProductListItem
              key={uuid}
              product={product}/>
      )   
  }

    render(){
    return (
      <div className="Home">
        <div className="homenav_container">
          <div className="header_container"></div>
            <Header
            history={this.props.history}/>
         
            
      </div>
      <div>
        <p className="home_p">Buy And Sell Products That Nourish The Whole Body. </p>
        <div className="logo_container">
          
        
                    
                    <div className="homeProd_container">
                    
                    <section className="prodSale_container"> 
                    <div><h1>Products For Sale</h1></div>
                    <div className="homeItem_container">
                        {this.renderProductsList()}
                    </div>
                    </section>
                    </div>
                </div>
                </div>
      </div>
    );
  }
  }

  
    
    

    
    
    

    

    