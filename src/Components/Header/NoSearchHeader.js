import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service'
import ProductsService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'

export default class Header extends React.Component{

    static contextType = ProductListContext


    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
        
    }


    renderLogoutLink(){
        
        return(
            
            <div className="homenav_container">
                <div className="nav_container">
                    <header className="header">
                        <h1 className="title1">
                        <Link 
                        className="link_title1"
                        to="/">Holistic Health</Link>
                        </h1>
                        
                    </header>
                    
                    <div className="homelink_container">
                        <div>
                            <Link 
                                className="home_nav"
                                to='/addProduct'>
                                Add Product
                            </Link>
                            <Link 
                                className="home_nav"
                                to='/myProducts'>
                                My Products
                            </Link>
                            <Link
                                className="home_nav"
                                to='/'
                            >
                                Products for Sale
                            </Link>
                            <Link className="home_nav"
                                onClick={this.handleLogoutButton}
                                to="/"
                                >
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    
    renderLoginLink(){
        
        return (
            <div className="homenav_container">     
            <div className="nav_container">
                <header className="header">
                <h1 className="title1">
                        <Link 
                        className="link_title1"
                        to="/">Holistic Health</Link>
                        </h1>

                </header>
                    <div className="homelink_container">
                        <div>
                        <Link
                            className="home_nav"
                            to='/register'>
                            Register {" "}
                        </Link>
                        </div>
                        <div>
                        <Link 
                            className="home_nav"
                            to='/login'>
                                Log in
                        </Link>
                        </div>
                    </div>
            </div>
            </div>
            
        )
    }
   
    render(){
        return(
            <nav className='navigation'>
                
                
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                
            </nav>
        )
    }
}