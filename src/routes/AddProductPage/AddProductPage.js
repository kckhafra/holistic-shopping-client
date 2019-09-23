import React from 'react'
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