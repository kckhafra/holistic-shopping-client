import React from 'react';
import ReactDOM from 'react-dom';
import AddProductForm from './AddProductForm';
import BrowserRouter from 'react-router-dom'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddProductForm />
        </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
      