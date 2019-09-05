import React from 'react';
import ProductsService from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'

export default class EditReact extends React.Component{
    state = {
        service_name: "",
        price: 1,
        inventory_amount: 1,
        description: "",
        category: "",

    }
    static contextType = ProductContext
   
    componentDidMount(){
        const {productId} = this.props.match.params
        ProductsService.getProductsById(productId)
        .then(product=>{
            return product.map((prod)=>{
                
                this.setState({ 
                    service_name: prod.service_name,
                    price: prod.price,
                    inventory_amount: prod.remaining_inventory,
                    description: prod.description,
                    category: prod.product_category,
                })
            })
            
            })
            .catch(error=>{
                console.log({error})
            })   
    }
    handleChangeService = e =>{
        this.setState({service_name: e.target.value})
    }

    handleChangePrice = e =>{
        this.setState({price: e.target.value})
    }
    handleChangeInventory = e =>{
        this.setState({inventory_amount: e.target.value})
    }
    handleChangeDescription = e =>{
        this.setState({description: e.target.value})
    }
    handleChangeCategory = e =>{
        this.setState({category: e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {productId} = this.props.match.params
        const {service_name, price, inventory_amount, description, category} = this.state
        const editedProducts = {service_name, price, inventory_amount, description, category}
        ProductsService.patchProduct(
            productId,
            editedProducts
        )
        // .then(res => {
        //     if (!res.ok)
        //       return res.json().then(error => Promise.reject(error))
        //   })
        .then(()=>{
            this.resetFields(editedProducts)
            this.context.updateMyProduct(editedProducts)
            this.props.history.push('/myProducts')
        })
        .catch(error => {
            console.log(error)
            this.setState({error})
        })

    }
    

    resetFields = (newFields) => {
        this.setState({
          service_name: newFields.service_name || '',
          price: newFields.price || '',
          inventory_amount: newFields.inventory_amount || '',
          description: newFields.description || '',
          category: newFields.category || '',
        })
      }

    handleCancelClick = ()=>{
        this.props.history.goBack()
    }
    render(){
        const {service_name, price, inventory_amount, description, category} = this.state
        return(
            <div>
                <h2>Edit Product</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_prodname"
                            htmlFor='add_service_name'>
                            Product/Service Name
                        </label>
                        <input
                            onChange={this.handleChangeService}
                            required
                            name='service_name'
                            id='add_service_name'
                            value={service_name}>
                            
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_price"
                            htmlFor='add_price'>
                            Price
                        </label>
                        <input
                            onChange={this.handleChangePrice}
                            required
                            name='price'
                            id='add_price'
                            value={price}>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_inventory"
                            htmlFor='add_inventory_amount'>
                            Inventory Amount
                        </label>
                        <input
                            onChange={this.handleChangeInventory}
                            required
                            name='inventory_amount'
                            id='add_inventory_amount'
                            value={inventory_amount}>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_description"
                            htmlFor='add_description'>
                            Description and Health Benefits
                        </label>
                        <input
                            onChange={this.handleChangeDescription}
                            required
                            name='description'
                            id='add_description'
                            value={description}>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_category"
                            htmlFor='add_category'>
                            Category
                        </label>
                        
                        <select 
                        onChange={this.handleChangeCategory}
                        name="category">
                            <option value='Tea'>Tea</option>
                            <option default value='Pills'>Pills</option>
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