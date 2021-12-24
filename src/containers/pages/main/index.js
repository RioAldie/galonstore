import React, { Component } from "react";
import './main.scss';
import logoa from '../../../assets/galon-logo.png';
import hero from '../../../assets/main-hero.png';
import bg from '../../../assets/waterbg.png';
import { createBrowserHistory } from 'history';
class Main extends Component{

    handleClick =  (e) =>{
       
         const browserHistory = createBrowserHistory();
        
        let id = e.target.id;
       
        if(id === 'masuk'){
            browserHistory.push('/login');
        window.location.reload();
        }
        if(id === 'daftar'){
           browserHistory.push('/register');
        window.location.reload();
        }
    }
    render(){
        return(
            <div className="container">
        
        <div className="mobile">
            <div className="logo">
                <img src={logoa} alt="" className="logos" />
            </div>
            <div className="hero">
                <img src={hero} alt="" className="heros" />
            </div>
            <div className="form-banner">
                <div className="hero-titles">
                    <div className="hero-title">
                        <p>Selamat Datang</p>
                    </div>
                    <div className="hero-subtitle">
                        <p>Kami siap membantu memenuhi kebutuhan air minum anda</p>
                    </div>
                    
                </div>
               
            </div>
             <div className="form-btn">
                    <div id="masuk" className="masuk-btn" onClick={this.handleClick}>
                        Masuk
                    </div>
                    <div id="daftar"
                    className="daftar-btn" onClick={this.handleClick}>
                        Daftar
                    </div>
                </div>
        </div>
        <img src={bg} className="main-bg" alt=""/>
    </div>
        )
    }
}

export default Main;
