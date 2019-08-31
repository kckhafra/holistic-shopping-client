import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component{

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = '/productsListPage'
        history.push(destination)
      }

    render(){
        return(
            <section className='LoginPage'>
                <h2>Login</h2>
                <LoginForm
                    history={this.props.history}
                    onLoginSuccess={this.handleLoginSuccess}>
                </LoginForm>
                    
            </section>
        )
    }
}