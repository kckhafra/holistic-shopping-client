import React from 'react'
import ProductService from '../../services/products-api-services'
import {withRouter} from 'react-router-dom';
import TokenService from '../../services/token-service'
import AddProductForm from '../../Components/AddProductForm/AddProductForm'



class AddProductPage extends React.Component{
    
     
    state = {error: null}

    

    loginSuccess = (product)=>{
        
        this.props.history.push('/productsListPage')
    }
    

    render(){
        return(
            <AddProductForm
                onLoginSuccess={this.loginSuccess}/>

        )
    }

}
export default AddProductPage