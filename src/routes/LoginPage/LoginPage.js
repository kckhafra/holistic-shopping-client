import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import NoSearchHeader from '../../Components/Header/NoSearchHeader'
import './LoginPage.css'


export default class LoginPage extends React.Component{

    handleLoginSuccess = () => {
        const { history } = this.props
        const destination = '/'
        history.push(destination)
      }

    render(){
        return( 
            <div>
                <NoSearchHeader/>
                <section className='LoginPage'>
                    <div className="login-container">
                        <h2>Login</h2>
                        <LoginForm
                            history={this.props.history}
                            onLoginSuccess={this.handleLoginSuccess}>
                        </LoginForm>
                    </div>
                        
                </section>
            </div>
        )
    }
}