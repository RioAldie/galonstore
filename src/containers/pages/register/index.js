import React, { Component } from "react";
import './register.scss';
import {  getAuth } from "firebase/auth";
import logob from '../../../assets/logos.svg';

import { connect } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";
import { createBrowserHistory } from "history";
import firebaseConfig from "../../../config/firebase";
import { Button } from "../../../components/atoms/Button";

class Register extends Component{

    state = {
        email : '',
        password : '',
        isLoading : false
    }

    handleChangeText = (e) =>{
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handleSublink = () => {
        const browserHistory = createBrowserHistory()
        browserHistory.push('/login');
        window.location.reload();
        
    }
    handleRegister =() =>{
        console.log('email : ', this.state.email);
        console.log('password : ', this.state.password)

        const auth = getAuth();
        const {email,password} = this.state;
        this.props.registerAPI({ auth : auth,email : email,password :password })
        this.setState({
            email: '',
            password: ''
        })
    }
    render(){
        console.log(firebaseConfig);
        return(
            <div className="container-reg">
        
        <div className="mobile-reg">
            <div className="logo">
                <img src={logob} alt="" className="logos" />
            </div>
            <div className="form-reg">
                <div className="reg-title">
                    <p>Daftar</p>
                </div>
                <label for="email" className="reg-label">Email</label>
                <input type="text" id="email" className="reg-input" placeholder="masukan email" onChange={this.handleChangeText} />
                <label for="password" className="reg-label">Password</label>
                <input type="password" id="password" className="reg-input" placeholder="masukan password" onChange={this.handleChangeText} />
                <Button title="Daftar" onClick={this.handleRegister} loading={this.props.isLoading}></Button>
                <div className="sublink">
                    <p>Sudah punya Akun?<span className="sub-link" onClick={this.handleSublink}>Masuk</span> </p>
                </div>
            </div>
        </div>
        
    </div>
        )
    }
}
const reduxState = (state) => ({
    isLoading : state.isLoading
})
const reduxDispatch = (dispatch)=> ({
    registerAPI : (data) => dispatch(registerUserAPI(data)) 
})

export default connect(reduxState , reduxDispatch) (Register);