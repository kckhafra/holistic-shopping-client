import React from 'react';
import Navigation from './Navigation';
import {shallow, mount} from 'enzyme';

describe('<Navigation />', function () {
    it('Renders without crashing', () => {
        shallow(<Navigation />);
    });
    
    
});