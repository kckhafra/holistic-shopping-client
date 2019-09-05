import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service';
import './Navigation.css'

export default class Navigation extends React.Component{
    
    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
    }

    renderLogoutLink(){
        return(
            <div className='Nav'>
                <Link className="nav-links"
                    onClick={this.handleLogoutButton}
                    to='/'>
                    Logout
                </Link>
                <Link 
                    className="nav-links"
                    to='/addProduct'>
                    Add Product
                </Link>
                <Link 
                    className="nav-links"
                    to='/myProducts'>
                    My Products
                </Link>
                <Link
                    className="nav-links"
                    to='/productsListPage'
                >
                    Products for Sale
                </Link>
            </div>
        )
    }

    renderLoginLink(){
        return (
            <div className="Nav">
                <Link
                    className="nav-links"
                    to='/register'>
                    Register {" "}
                </Link>
                
                <Link 
                    className="nav-links"
                    to='/login'>
                        Log in
                </Link>
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