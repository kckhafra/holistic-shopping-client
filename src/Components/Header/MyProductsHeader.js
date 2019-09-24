import React from 'react';
import './Header.css'
import TokenService from '../../services/token-service'
import ProductsService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import './MyProductsHeader.css'



export default class Header extends React.Component{

    static contextType = ProductListContext

    handleSubmit = (e)=>{
        e.preventDefault()
        const search_term = e.target.search_term.value

        ProductsService.getMyProducts(
            search_term
        )
        .then(this.context.setMyProducts)
    }
    
    


    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
        
    }

    // componentWillUnmount(){
    //     this.context.clearGuestProduct()
    // }

    render() {
        return(
                <form 
                    onSubmit={this.handleSubmit}
                    id="header_search">
                    <div className="mySearch_container">
                    <div>
                    <label className="title_your">Your Products</label>
                    </div>
                    <div>
                    <input id="myHeader_input" name="search_term" placeholder="Search Your Products" ></input>
                    <input type="submit" className="mySubmit-input" value="Search Products"  ></input>
                    </div>
                    </div>
                </form>
        )
                           
    }
}
