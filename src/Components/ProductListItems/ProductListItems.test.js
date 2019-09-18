import React from 'react';
import ProductListItems from './ProductListItems';
import {shallow, mount} from 'enzyme';

describe('<ProductListItems />', function () {
    it('Renders without crashing', () => {
        shallow(<ProductListItems />);
    });
    
    
});