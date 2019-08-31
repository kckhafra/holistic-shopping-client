import React from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service';

export default class Navigation extends React.Component{
    
    handleLogoutButton = ()=>{
        TokenService.clearAuthToken()
    }

    renderLogoutLink(){
        return(
            <div className='Header_logged-in'>
                <Link
                    onClick={this.handleLogoutButton}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink(){
        return (
            <div>
                <Link
                    to='/register'>
                    Register
                </Link>
                <Link 
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