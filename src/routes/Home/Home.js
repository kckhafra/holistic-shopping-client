import React from 'react';
import './Home.css'
import ProductListContext from '../../contexts/ProductListContext'
import ProductsApiService from '../../services/products-api-services'
import ProductListItem from '../../Components/ProductListItems/ProductListItems'
import Header from '../../Components/Header/Header'
const uuid = require('uuid')


export default class Home extends React.Component {
  static contextType = ProductListContext

  state = {error:null}

    componentDidMount(){
        ProductsApiService.getGuestProducts()
            .then(
              this.context.setGuestProductList
              )
            
            .catch(error =>{
              console.log(error)
            })
    }

    renderProductsList(){
        
      return <div>
      <div><h1>Products For Sale</h1></div>
      <div className="homeItem_container">
      {this.context.guestProducts.map(product=>
          <ProductListItem
              key={uuid}
              product={product}/>
      ) }
      </div>
      </div>  
  }

  renderNoProducts(){
    return <div className="no_products">Currently all sellers have run out of products to sell. That just means we are popular. Make sure to come back soon to get your holsitic products</div>
  }

    render(){
      
      console.log(this.context.guestProducts)
    return (
      <div className="Home">
            <Header
            history={this.props.history}/>
         
            
     
      <div>
        <p className="home_p">Buy And Sell Products That Nourish The Whole Body. </p>
        <div className="logo_container">
                    <section className="prodSale_container"> 
                        {this.context.guestProducts.length <= 0 || this.context.guestProducts === [""]
                          ? this.renderNoProducts()
                          :this.renderProductsList()}
                   
                    </section>
                    </div>
                </div>
      </div>
    );
  }
  }

  
    
    

    
    
    

    

    