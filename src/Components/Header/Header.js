import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import './Header.css'

export default class Header extends React.Component{
    
   
    render(){
        return(
            <div className='header_container'>
                <header className="header">
                    <h1 className="title1">
                        Holisitic Health
                    </h1>
                    <h2 className="title2">Buy and sell goods that treat the entire body </h2>
                </header>
                
            </div>

           
        )
    }
}