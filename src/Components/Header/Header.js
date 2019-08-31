import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../Navigation/Navigation';

export default class Header extends React.Component{
    
   
    render(){
        return(
            <div className='header_container'>
                <Navigation/>
                <header className="header">
                    <h1>
                        The Universe
                    </h1>
                    <h2>Buy and sell holistic goods</h2>
                </header>
            </div>

           
        )
    }
}