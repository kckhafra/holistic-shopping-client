import React, {Component} from 'react';
import {CardNumberElement,CardExpiryElement,CardCvcElement,PaymentRequestButtonElement, injectStripe} from 'react-stripe-elements';
import config from '../../config'
import './CheckoutForm.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  
  

  async submit(ev) {
    ev.preventDefault()
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch(`${config.API_ENDPOINT}/charge`, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
      
    });
  
    if (response.ok) {
      this.setState({complete: true});
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p className="p_checkout">Would you like to complete the purchase?</p>
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
         
        <button onClick={this.submit}>Send</button> 
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);