import React from 'react';

import LoginPage from '../../routes/LoginPage/LoginPage'
import './App.css';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import ProductsListPage from '../../routes/ProductsListPage/ProductsListPage'
import ProductPage from '../../routes/ProductPage/ProductPage';
import AddProductPage from '../../routes/AddProductPage/AddProductPage'
import MyProductsList from '../../routes/MyProductsList/MyProductsList'

import MyProductPage from '../../routes/MyProductPage/MyProductPage'
import EditProductForm from '../EditProductForm/EditProductForm'

import CheckoutPage from '../../routes/CheckoutPage/CheckoutPage'


class App extends React.Component {
  

  render(){
  return (
    <div className="App">
      <main>
        
        <Route 
          exact
          path={'/'}
          component={Home}/>
        <Route
          path={'/login'}
          component={LoginPage}/>
        <Route
          path={'/register'}
          component={RegistrationPage}/>
        <Route
          path={'/productsListPage'}
          component={ProductsListPage}/>
        <Route 
          exact path={'/product/:productId'}
          component={ProductPage}/>
        <Route 
          path={'/addProduct'}
          component={AddProductPage}
        />
        <Route
          path={'/myProducts'}
          component={MyProductsList}
        />
        <Route
        exact
          path={'/product/my/:productId'}
          component={MyProductPage}
        />
        <Route 
          path={'/edit/:productId'}
          component={EditProductForm}
        />
       <Route
        path={'/CheckoutPage'}
        component={CheckoutPage}
        />
        
       
        
      </main>
    </div>
  );
}
}

export default App;
