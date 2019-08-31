import React from 'react';


 const ProductListContext =  React.createContext({
    productList: [],
    setProductList: ()=>{},
    
})
export default ProductListContext

export class ProductListProvider extends React.Component{
    state = {
        productList: [""]
    }

    setProductList = productList=>{
        this.setState({productList})
    }

    render(){
        

        const value = {
            productList: this.state.productList,
            setProductList: this.setProductList
        }
        return (
            <ProductListContext.Provider value={value}>
              {this.props.children}
            </ProductListContext.Provider>
          )
    }
    
}




  