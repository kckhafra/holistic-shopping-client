import React from 'react';
import CheckoutForm from './CheckoutForm';
import {shallow, mount} from 'enzyme';

describe('<CheckoutForm />', function () {
    it('Renders without crashing', () => {
        shallow(<CheckoutForm />);
    });
    
    
});