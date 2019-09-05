import React from 'react';


 const ProductListContext =  React.createContext({
    productList: [],
    setProductList: ()=>{},
    myProducts: [],
    setMyProducts: ()=>{}
    
})
export default ProductListContext

export class ProductListProvider extends React.Component{
    state = {
        productList: [""],
        myProducts: [""]
    }

    setMyProducts = myProducts=>{
        this.setState({myProducts})
    }

    setProductList = productList=>{
        this.setState({productList})
    }

    render(){
        

        const value = {
            productList: this.state.productList,
            setProductList: this.setProductList,
            myProducts: this.state.myProducts,
            setMyProducts:this.setMyProducts
        }
        return (
            <ProductListContext.Provider value={value}>
              {this.props.children}
            </ProductListContext.Provider>
          )
    }
    
}




  