import './AddProductForm.css';
import React from 'react'
import ProductService from '../../services/products-api-services'
import {withRouter} from 'react-router-dom';
import TokenService from '../../services/token-service'
import config from '../../config'


class AddProductPage extends React.Component{
    
     
    state = {error: null}

    
    handleSubmit = (ev)=>{
        ev.preventDefault()
        
        const {service_name, price, inventory_amount, description, images,category} = ev.target
        ProductService.postProduct({
            service_name: service_name.value,
            price: price.value,
            remaining_inventory: inventory_amount.value,
            description: description.value,
            images: images.value,
            product_category: category.value
        })
            .then((product)=>{
                this.props.onLoginSuccess(product)
            })
            

    }

    handleCancelClick = ()=>{
        this.props.history.goBack()
    }

    render(){
        return(
            <div className="addProd_container">
                <h2>Sale Product/Service</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_prodname"
                            htmlFor='add_service_name'>
                            Product/Service Name
                        </label>
                        <input
                            required
                            name='service_name'
                            id='add_service_name'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_price"
                            htmlFor='add_price'>
                            Price
                        </label>
                        <input
                            required
                            name='price'
                            id='add_price'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_inventory"
                            htmlFor='add_inventory_amount'>
                            Inventory Amount
                        </label>
                        <input
                            required
                            name='inventory_amount'
                            id='add_inventory_amount'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_description"
                            htmlFor='add_description'>
                            Description and Health Benefits
                        </label>
                        <input
                            required
                            name='description'
                            id='add_description'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_image"
                            htmlFor='add_image'>
                            Product Image URL
                        </label>
                        <input
                            required
                            name='images'
                            id='add_image'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_category"
                            htmlFor='add_category'>
                            Category
                        </label>
                        
                        <select name="category">
                            <option default value='Tea'>Tea</option>
                            <option value='Pills'>Pills</option>
                            <option value='Counseling'>Counseling</option>
                            <option value='Plant-based'>Plant-based</option>
                            <option value='Body-care'>Body-care</option>
                            <option value='Recipes'>Recipes</option>
                        </select>
                        
                    </div>
                    <div className="button_container">
                    <button 
                        className="add_button add_button1"
                        type='submit'>
                        Submit
                    </button>
                    <button 
                        className="add_button add_button2"
                        type='button'
                        onClick={this.handleCancelClick}
                    >
                        Cancel
                    </button>
                    </div>
                </form>
            </div>

        )
    }
}
export default withRouter(AddProductPage)