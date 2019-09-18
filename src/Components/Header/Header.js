import React from 'react';
import {Link} from 'react-router-dom'
import Navigation from '../Navigation/Navigation';
import './Header.css'

export default class Header extends React.Component{
    
   
    render(){
        return(
            
                <header className="header">
                    <h1 className="title1">
                        Holistic Health
                    </h1>
                    <h2 className="title2">Buy and sell products that treat the entire body </h2>
                </header>
                
           

           
        )
    }
}