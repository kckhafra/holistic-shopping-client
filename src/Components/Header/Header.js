import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service'
import ProductsService from '../../services/products-api-services'
import ProductListContext from '../../contexts/ProductListContext'
import { slide as Menu } from 'react-burger-menu'


export default class Header extends React.Component{

    static contextType = ProductListContext

    handleSubmit = (e)=>{
        e.preventDefault()
        const search_term = e.target.search_term.value
        
        ProductsService.getGuestProductsSearch(
            search_term
        )
        .then(this.context.setGuestProductList
            
            )
            
    }
    
    


    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
        this.props.history.push("/")
        
    }
   

    componentWillUnmount(){
        this.context.clearGuestProduct()
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
                        <form 
                            onSubmit={this.handleSubmit}
                            id="header_search">
                            <input id="header_input" name="search_term"></input>
                            <input type="submit" className="submit-input" value="Search" ></input>
                        </form>
                        
                            <h2 className="title2">Shop holistic goods</h2>
                            <div>
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
                    {/* <SmallHeaderLogin
                        onSubmit={this.handleSubmit}
                        onLogout={this.handleLogoutButton}/> */}
                        
          
            <div className="nav_container">
                
                
                <header className="header">
                <h1 className="title1">
                        <Link 
                        className="link_title1"
                        to="/">Holistic Health</Link>
                        </h1>
                    <form 
                        onSubmit={this.handleSubmit}
                        id="header_search">
                        <input id="header_input" name="search_term"></input>
                        <input type="submit" className="submit-input" value="Search" ></input>
                    </form>
                    
                    <h2 className="title2">Shop holistic goods</h2>

                     <div>   
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