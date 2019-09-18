import React from 'react';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm'
import {Elements, StripeProvider} from 'react-stripe-elements';
import './CheckoutPage.css'

class CheckoutPage extends React.Component{
  handleCancelClick = ()=>{
    this.props.history.push('/productsListPage')
}
  render(){
    
    return(
      <div>
      <StripeProvider apiKey="pk_test_k4dh81vd6SLTJyFDdpLXODGs00rq7566vZ">
      <div className="example">
        <h1>Checkout</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
      </StripeProvider>

      <button
          className="checkout_cancel" 
          onClick={this.handleCancelClick}
          type="button">
            Cancel
      </button>
      </div>
    )
}
}

export default CheckoutPage;