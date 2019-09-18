import React from 'react';
import RegistrationForm from './RegistrationForm';
import {shallow, mount} from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', function () {
    it('Renders without crashing', () => {
        shallow(<RegistrationForm />);
    });
    
    
});