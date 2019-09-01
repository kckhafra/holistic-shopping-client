import React from 'react'
import ProductService from '../../services/products-api-services'
import {withRouter} from 'react-router-dom';
import TokenService from '../../services/token-service'



class AddProductPage extends React.Component{
    
     
    state = {error: null}

    

    handleSubmit = (ev)=>{
        ev.preventDefault()
        const {service_name, price, inventory_amount, description, category} = ev.target
        const [tokenUserName, tokenPassword] = TokenService.getAuthToken().split(',')
        console.log(tokenUserName)
        
        ProductService.postProduct({
            user_id: tokenUserName,
            service_name: service_name.value,
            price: price.value,
            remaining_inventory: inventory_amount.value,
            description: description.value,
            product_category: category.value
        })
            .then((product)=>{
                console.log(product)
                this.props.onLoginSuccess(product)
            })
            

    }

    handleCancelClick = ()=>{
        this.props.history.goBack()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='add_service_name'>
                            Product/Service Name
                        </label>
                        <input
                            required
                            name='service_name'
                            id='add_service_name'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='add_price'>
                            Price
                        </label>
                        <input
                            required
                            name='price'
                            id='add_price'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='add_inventory_amount'>
                            Inventory Amount
                        </label>
                        <input
                            required
                            name='inventory_amount'
                            id='add_inventory_amount'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='add_description'>
                            Description and Health Benefits
                        </label>
                        <input
                            required
                            name='description'
                            id='add_description'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='add_category'>
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
                    <button type='submit'>
                        Submit
                    </button>
                    <button 
                        type='button'
                        onClick={this.handleCancelClick}
                    >
                        Cancel
                    </button>
                </form>
            </div>

        )
    }
}
export default withRouter(AddProductPage)