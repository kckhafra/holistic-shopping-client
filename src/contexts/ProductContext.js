import React from 'react';

const ProductContext = React.createContext({
    product: [],
    setProduct: ()=>{}
})

export default ProductContext;

export class ProductProvider extends React.Component{
    state = {
        product: [""]
    };

    clearProduct = () => {
        this.setProduct([""])
    }

    setProduct = product=>{
        this.setState({product})
    }
    
    render(){
        const value = {
            product: this.state.product,
            setProduct: this.setProduct,
            clearProduct: this.clearProduct
        }
        return(
            <ProductContext.Provider value={value}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}