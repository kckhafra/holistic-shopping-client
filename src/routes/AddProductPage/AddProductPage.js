import React from 'react'
import ProductService from '../../services/products-api-services'
import {withRouter} from 'react-router-dom';
import TokenService from '../../services/token-service'
import AddProductForm from '../../Components/AddProductForm/AddProductForm'
import Header from '../../Components/Header/Header'


class AddProductPage extends React.Component{
    
     
    state = {error: null}

    

    loginSuccess = (product)=>{
        
        this.props.history.push('/myProducts')
    }
    

    render(){
        return(
            <section className="">
            <Header />
            <AddProductForm
                onLoginSuccess={this.loginSuccess}/>
            </section>

        )
    }

}
export default AddProductPage