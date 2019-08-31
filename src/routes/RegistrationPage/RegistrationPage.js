import React from 'react';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends React.Component {
    handleRegistrationSuccess = (user)=>{
      this.props.history.push('/login')
    }
  
    render() {
      return (
        <section className='RegistrationPage'>
          <h2>Register</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
            history={this.props.history}/>
        </section>
      )
    }
  }