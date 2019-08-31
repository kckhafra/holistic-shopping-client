import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {ProductListProvider} from './contexts/ProductListContext'
import {ProductProvider} from './contexts/ProductContext'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
    <ProductListProvider>
        <ProductProvider>
            <App />
        </ProductProvider>
    </ProductListProvider>
</BrowserRouter>, document.getElementById('root'));


