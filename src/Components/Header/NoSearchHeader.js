import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service'
import ProductListContext from '../../contexts/ProductListContext'
import { slide as Menu } from 'react-burger-menu'
import './NoSearchHeader.css'

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
                        <div className="noSearch_menu">     
                            <Menu 
                                right
                                pageWrapId={ "page-wrap" }
                                >
                                <a id="home" className="menu-item" href="/">Home</a>
                                <a id="about" className="menu-item" href="/addProduct">Add Product</a>
                                <a id="contact" className="menu-item" href="/myProducts">My Products</a>
                                <a id="contact" className="menu-item" href="/">Products for Sale</a>
                                <a onClick={ this.handleLogoutButton } className="menu-item" href="/">Logout</a>
                            </Menu>
                        </div>
                        
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

                    <div className="noSearch_menu">     
                    <Menu 
                        right
                        pageWrapId={ "page-wrap" }
                        >
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="register" className="menu-item" href="/register">Register</a>
                        <a id="login" className="menu-item" href="/login">Login</a>
                        
                    </Menu>
                </div>
               

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