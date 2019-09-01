import React from 'react';

import LoginPage from '../../routes/LoginPage/LoginPage'
import './App.css';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import ProductsListPage from '../../routes/ProductsListPage/ProductsListPage'
import ProductPage from '../../routes/ProductPage/ProductPage';
import AddProductPage from '../../routes/AddProductPage/AddProductPage'

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
          path={'/product/:productId'}
          component={ProductPage}/>
        <Route 
          path={'/addProduct'}
          component={AddProductPage}
        />
       
        
      </main>
    </div>
  );
}
}

export default App;
