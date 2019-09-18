import React from 'react';
import LoginForm from './LoginForm';
import {shallow, mount} from 'enzyme';

describe('<LoginForm />', function () {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });
    
    
});