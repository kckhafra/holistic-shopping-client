import React from 'react'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css'

export default class LoginForm extends React.Component{
   static defaultProps = {
       onLoginSuccess: ()=>{}
   }

   state = {error: null}
    
   
   handleSubmitJwtAuth = (ev) => {
    ev.preventDefault()
    const {user_name, password} = ev.target
    this.setState({error:null})
    
    
    AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
    })
    
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)

            this.props.onLoginSuccess()
        })
        .catch(res=>{
            this.setState({error: res.error})
        })


        user_name.value = ''
        password.value = ''
    }

    handleCancel = (ev) => {
        this.props.history.push('/')
    }

    render(){
        const {error} = this.state
        return(
            <form
                onSubmit={this.handleSubmitJwtAuth}
                className='LoginForm'
                >
                    <div role="alert">
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <div className='user_name'>
                    <label 
                        className="log_label label_username"
                        htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <input
                    type="text"
                        required
                        name='user_name'
                        id='LoginForm__user_name'
                        >
                    </input>
                    </div>
                    <div className='password'>
                    <label 
                        className="log_label label_password"
                        htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <input
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </input>
                    </div>
                    <div >
                    <button 
                        
                        className="log_button log_button1"
                        type='submit'>
                    Login
                    </button>
                    <button 
                        className="log_button log_button2"
                        type='button'
                        onClick={this.handleCancel}
                    >
                        Cancel
                    </button>
                    </div>
                   
            </form>
        )
    }
}