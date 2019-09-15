import React from 'react';
import AddProductForm from './AddProductForm';
import {shallow, mount} from 'enzyme';

describe('<AddProductForm />', function () {
    it('Renders without crashing', () => {
        shallow(<AddProductForm />);
    });
    
    
});