import React from 'react';
import EditProductForm from './EditProductForm'
import {shallow, mount} from 'enzyme';
import ProductProvider from '../../contexts/ProductContext'

describe('<EditProductForm />', function () {
    it('Renders without crashing', () => {
        shallow(<EditProductForm />);
    });
});