import React from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends React.Component{
    handleRegisterSubmit = (ev)=>{
        ev.preventDefault()
        const {full_name, email, user_name, password} = ev.target
        AuthApiService.postUser({
            full_name: full_name.value,
            email: email.value,
            user_name: user_name.value,
            password: password.value,
        })
        .then(user=>{
            full_name.value=''
            email.value=''
            user_name.value=''
            password.value=''
            this.props.onRegistrationSuccess()
        })
        
    }

    handleCancel = (ev) => {
        this.props.history.push('/')
    }
    
    render(){
        return(
            <form
                className='RegistrationForm'
                onSubmit={this.handleRegisterSubmit}
            >
                <div className='full_name'>
                    <label htmlFor='RegistrationForm_full_name' >
                        Full name
                    </label>
                    <input
                        name="full_name"
                        type="text"
                        required
                        id='RegistrationForm_full_name'
                    >
                    </input>
                </div>
                <div className='email'>
                    <label htmlFor='email' >
                        Email
                    </label>
                    <input
                        name="email"
                        type="text"
                        required
                        id='RegistrationForm_email'
                    >
                    </input>
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm_user_name' >
                        User Name
                    </label>
                    <input
                        name="user_name"
                        type="text"
                        required
                        id='RegistrationForm_user_name'
                    >
                    </input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password' >
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        required
                        id='RegistrationForm_password'
                    >
                    </input>
                </div>
                <button
                        type="submit">
                            Submit
                </button>
                <button
                    onClick={this.handleCancel}
                    type="button">
                            Cancel
                </button>
                
            </form>
        )
    }
}