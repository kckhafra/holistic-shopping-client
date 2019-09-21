import React from 'react';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends React.Component {
    handleRegistrationSuccess = (user)=>{
      
      this.props.history.push('/login')
    }
  
    render() {
      return (
        <section className='RegistrationPage'>
          
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
            history={this.props.history}/>
        </section>
      )
    }
  }