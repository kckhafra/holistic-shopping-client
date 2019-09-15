import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {shallow, mount} from 'enzyme';
import {Route} from 'react-router-dom';
import LoginPage from '../../routes/LoginPage/LoginPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

