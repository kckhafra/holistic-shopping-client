import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import './LoginPage.css'


export default class LoginPage extends React.Component{

    handleLoginSuccess = () => {
        const { history } = this.props
        const destination = '/'
        history.push(destination)
      }

    render(){
        return(
            <section className='LoginPage'>
                <header className="login_header">
                    <h1 className="login_title">
                        Holisitic Health
                    </h1>
                </header>
                <div className="login-container">
                    <h2>Login</h2>
                    <LoginForm
                        history={this.props.history}
                        onLoginSuccess={this.handleLoginSuccess}>
                    </LoginForm>
                </div>
                    
            </section>
        )
    }
}