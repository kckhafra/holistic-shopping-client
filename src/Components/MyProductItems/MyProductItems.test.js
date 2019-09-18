import React from 'react';
import MyProductItem from './AddProductForm';
import {shallow, mount} from 'enzyme';

describe('<MyProductItem />', function () {
    it('Renders without crashing', () => {
        shallow(<MyProductItem />);
    });
    
    
});