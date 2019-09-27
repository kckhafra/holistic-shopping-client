import React from 'react';
import ProductsService from '../../services/products-api-services'
import ProductContext from '../../contexts/ProductContext'
import Header from '../../Components/Header/Header'
import './EditProductForm.css'


 

export default class EditReact extends React.Component{
    state = {
        service_name: "",
        price: 1,
        remaining_inventory: 1,
        description: "",
        product_category: "",
        images: "",

    }
    static contextType = ProductContext

    
   
    componentDidMount(){
        this.context.clearError()
        const {productId} = this.props.match.params
        ProductsService.getProductsById(productId)
        .then(product=>{
            return product.map((prod)=>{
                this.setState({ 
                    service_name: prod.service_name,
                    price: prod.price,
                    remaining_inventory: prod.remaining_inventory,
                    description: prod.description,
                    images: prod.images,
                    product_category: prod.product_category,
                })
            })
            
            })
            .catch(this.context.setError) 
    }
   

    
    

    handleChangeService = e =>{
        this.setState({service_name: e.target.value})
    }

    handleChangePrice = e =>{
        this.setState({price: e.target.value})
    }
    handleChangeInventory = e =>{
        this.setState({remaining_inventory: e.target.value})
    }
    handleChangeDescription = e =>{
        this.setState({description: e.target.value})
    }
    handleChangeCategory = e =>{
        this.setState({product_category: e.target.value})
        
    }
    handleChangeimages = e =>{
        this.setState({images: e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {productId} = this.props.match.params
        const {service_name, price, remaining_inventory, description, product_category, images} = this.state
        const editedProducts = {service_name, price, remaining_inventory, description, product_category, images}
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
          remaining_inventory: newFields.remaining_inventory || '',
          description: newFields.description || '',
          product_category: newFields.product_category || '',
        })
      }

    handleCancelClick = ()=>{
        this.props.history.goBack()
    }

    
    

    gernerateOptionsHTML(){
        return ['Tea','Pills','Counseling','Plant-based','Body-care','Recipes'].map((categ, uuid) => {
            if (categ === this.state.product_category) {
              return <option selected key={uuid} value={categ}>{categ}</option>
            }
            return <option key={uuid} value={categ}>{categ}</option>
          })
            }
            

    render(){
        const options = this.gernerateOptionsHTML()
        const {service_name, price, remaining_inventory, description, images} = this.state
        return(
            <div >
                <Header/>
                <div className="editprod_container">
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
                            htmlFor='add_remaining_inventory'>
                            Inventory Amount
                        </label>
                        <input
                            onChange={this.handleChangeInventory}
                            required
                            name='remaining_inventory'
                            id='add_remaining_inventory'
                            value={remaining_inventory}>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_description"
                            htmlFor='add_description'>
                            Description 
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
                            className="label_addprod label_image"
                            htmlFor='add_image'>
                            Product Image URL
                        </label>
                        <input
                            onChange={this.handleChangeimages}
                            required
                            value={images}
                            name='images'
                            id='add_image'>
                        </input>
                    </div>
                    <div className="input_container">
                        <label 
                            className="label_addprod label_category"
                            htmlFor='add_product_category'>
                             Category
                        </label>
                        <div className="select-category">
                            <select 
                            onChange={this.handleChangeCategory}
                            name="product_category">
                                {options}
                            </select>
                        </div>
                        
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
            </div>
        )
    }
}