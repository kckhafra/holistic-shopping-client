import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service';
import './Navigation.css'


export default class Navigation extends React.Component{
    state = {
        showMenu: false,
    };

    showMenu = (event)=>{
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu = (e)=>{
        e.preventDefault();
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
        
      }
    


    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
    }

    renderLogoutLink(){
        return(
            <div>
                <div className='Nav-dropdown'>
                <button 
                    onClick={this.showMenu}
                    className="nav-icon"
                    >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
                
                {
                    this.state.showMenu 
                    ? (
                        <div><div
                            className="menu"
                            ref={(element) => {
                            this.dropdownMenu = element;
                            }}
                        >
                            
                        </div>
                        <section className="dropdown-container">
                        <Link className="navlinks-dropdown"
                            onClick={this.handleLogoutButton}
                            to='/'>
                            Logout
                        </Link>
                        
                        <Link 
                            className="navlinks-dropdown"
                            to='/addProduct'>
                            Add Product
                        </Link>
                        <Link 
                            className="navlinks-dropdown"
                            to='/myProducts'>
                            My Products
                        </Link>
                        <Link
                            className="navlinks-dropdown"
                            to='/productsListPage'
                        >
                            Products for Sale
                        </Link>
                        </section>
                        </div>
                     ) 
                     : (
                         null
                     )
                }
            </div>
            <div className="Nav">
                <Link 
                    className="nav-links log-link"
                    to='/'>
                        Logout  
                </Link> 
                
                <Link 
                    className="nav-links"
                    to='/addProduct'>
                        Add Product <span className="nav_span">||</span>
                </Link> 
                <Link 
                    className="nav-links"
                    to='/myProducts'>
                        My Products <span className="nav_span">||</span>
                </Link> 
                
                <Link
                    className="nav-links"
                    to='/productsListPage'
                >
                    Products for Sale <span className="nav_span">||</span>
                </Link>
            </div>
            
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