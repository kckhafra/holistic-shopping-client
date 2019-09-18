import React from 'react';
import Header from './Header';
import {shallow, mount} from 'enzyme';

describe('<Header />', function () {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
    
    
});