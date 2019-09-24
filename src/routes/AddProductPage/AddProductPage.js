import React from 'react'
import AddProductForm from '../../Components/AddProductForm/AddProductForm'
import NoSearchHeader from '../../Components/Header/NoSearchHeader'


class AddProductPage extends React.Component{
    
     
    state = {error: null}

    

    loginSuccess = (product)=>{
        
        this.props.history.push('/myProducts')
    }
    

    render(){
        return(
            <section className="">
            <NoSearchHeader />
            <AddProductForm
                onLoginSuccess={this.loginSuccess}/>
            </section>

        )
    }

}
export default AddProductPage