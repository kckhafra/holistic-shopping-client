import React from 'react';

const ProductContext = React.createContext({
    product: [],
    setProduct: ()=>{},
    myProduct: [""],
    setMyProduct: ()=>{},
    deleteMyProduct: ()=>{},
    updateMyProduct: ()=>{},
})

export default ProductContext;

export class ProductProvider extends React.Component{
    state = {
        product: [""],
        myProduct: [""]
    };

    deleteMyProduct = (productId) => {
        this.setState({
            myProduct: this.state.myProduct.filter(product=>product.id !==productId)
        })
    }
    updateMyProduct = (updatedProduct)=>{
        const newProduct = this.state.myProduct.map(product =>
            (product.id === updatedProduct.id)
            ? updatedProduct
            : product
            )
            this.setState({
                myProduct: newProduct
            })
    }

    clearProduct = () => {
        this.setProduct([])
    }

    setProduct = product=>{
        this.setState({product})
    }
    setMyProduct = () =>{
        this.setMyProduct([])
    }
    
    render(){
        const value = {
            product: this.state.product,
            setProduct: this.setProduct,
            clearProduct: this.clearProduct,
            myProduct: this.state.myProduct,
            setMyProduct: this.setMyProduct,
            deleteMyProduct: this.deleteMyProduct,
            updateMyProduct: this.updateMyProduct
        }
        return(
            <ProductContext.Provider value={value}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}