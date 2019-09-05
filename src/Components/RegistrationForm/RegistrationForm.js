import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'



export default class RegistrationForm extends React.Component{

    state={error:null}

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
        .catch(res=>{
            this.setState({error: res.error})
        })
        
    }

    handleCancel = (ev) => {
        this.props.history.push('/')
    }
    
    render(){
        const {error} = this.state
        return(
            <div>
                <div role="alert">
                    {error && <p className='error'>{error}</p>}
                </div>
                <form
                    className='RegistrationForm'
                    onSubmit={this.handleRegisterSubmit}
                >
                    <div className='input_container full_name'>
                        <label 
                            className="label_reg label_fullname"
                            htmlFor='RegistrationForm_full_name' >
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
                    <div className='input_container email'>
                        <label 
                            className="label_reg label_email"
                            htmlFor='RegistrationForm_email' >
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
                    <div className='input_container user_name'>
                        <label 
                            className="label_reg label_username"
                            htmlFor='RegistrationForm_user_name' >
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
                    <div className='input_container password'>
                        <label 
                            className="label_reg label_password"
                            htmlFor='RegistrationForm_password' >
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
                    <div className="button_container">
                        <button
                            className="reg_button reg_button1"
                                type="submit">
                                    Submit
                        </button>
                        <button
                            className="reg_button reg_button2"
                            onClick={this.handleCancel}
                            type="button">
                                    Cancel
                        </button>
                    </div>
                    
                </form>
            </div>
        )
    }
}