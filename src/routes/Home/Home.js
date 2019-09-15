import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Header from '../../Components/Header/Header'
import HomeImages from '../Home/Home-images';


export default class App extends React.Component {
    render(){
    return (
      <div className="Home">
          <Header/>
          <div className="img-container">
          <img className="home-img" src={HomeImages.holisticLifeCream}/>
          <img className="home-img" src={HomeImages.bottleAndSoap}/>
          <img className="home-img" src={HomeImages.seaMoss}/>
        </div>
        <div className="home_nav_container">
                <Link
                    className="home_nav"
                    to='/register'>
                    Register {" "}
                </Link>
                
                <Link 
                    className="home_nav"
                    to='/login'>
                        Log in
                </Link>
            </div>
      </div>
    );
  }
  }