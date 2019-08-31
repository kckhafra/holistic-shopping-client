import React from 'react'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';


export default class LoginForm extends React.Component{
   static defaultProps = {
       onLoginSuccess: ()=>{}
   }

   state = {error: null}
    
    handleSubmit = (ev) => {
        ev.preventDefault()
        const {user_name, password} = ev.target
        

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        
            .then(res => {
                
                TokenService.saveAuthToken(`${res.user_name},${res.password}`
                  )
                  console.log(res.user_name, res.password)
                this.props.onLoginSuccess()
            })
            .catch(res=>{
                this.setState({error: res.error})
            })

            console.log(user_name.value, password.value)
            


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
                onSubmit={this.handleSubmit}
                className='LoginForm'
                >
                    <div role="alert">
                        {error && <p className='error'>{error}</p>}
                    </div>
                    <div className='user_name'>
                    <label htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <input
                        required
                        name='user_name'
                        id='LoginForm__user_name'
                        >
                    </input>
                    </div>
                    <div className='password'>
                    <label htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <input
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </input>
                    </div>
                    <button type='submit'>
                    Login
                    </button>
                    <button 
                        type='button'
                        onClick={this.handleCancel}
                    >
                        cancel
                    </button>
                   
            </form>
        )
    }
}