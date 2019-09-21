import React from 'react';
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'



export default class SmallHeaderLogOut extends React.Component{
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
    render(){
        return(
           <div>
                <div className="header_container"></div>
                <div className='Nav-dropdown'>
                <button 
                    onClick={this.showMenu}
                    className="nav-icon"
                    >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
                <header className="header">
                    <h1 className="title1">
                    <Link 
                    className="link_title1"
                    to="/">Holistic Health</Link>
                    </h1>
                    <form 
                        onSubmit={this.props.onSubmit}
                        id="header_search">
                        <input id="header_input" name="search_term"></input>
                        <input type="submit" className="submit-input" value="Search" ></input>
                    </form>
                </header>
            
            {
                this.state.showMenu 
                ? (
                    <div>
                    <div
                        className="menu"
                        ref={(element) => {
                        this.dropdownMenu = element;
                        }}
                    > 
                    </div>
                    <section className="dropdown-container">
                    
                    <section className="dropdown-container">
                         <button className="navlinks-dropdown"
                            onClick={this.props.onLogout}
                            
                            >
                            Logout
                        </button>
                        
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
                            to='/'
                        >
                            Products for Sale
                        </Link>
                        </section>
                    </section>
                    </div>
                 ) 
                 : (
                     null
                 )
            }
        </div>
           </div>
        )
    }
}