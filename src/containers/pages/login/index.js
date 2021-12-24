import React, { Component } from "react";
import './login.scss';
import logob from '../../../assets/logos.svg';
import bg from '../../../assets/waterbg.png';
import { connect } from "react-redux";
import { createBrowserHistory } from 'history';
import { loginUserAPI } from "../../../config/redux/action";
import firebaseConfig from "../../../config/firebase";
import { getAuth } from "@firebase/auth";
import { Button } from "../../../components/atoms/Button";


class Login extends Component{
  
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
            browserHistory.push('/register');
            window.location.reload();
            
        }
        handleLogin = async () =>{
            
            console.log(this.state.email);
            const browserHistory = createBrowserHistory()
            console.log(firebaseConfig);
            const auth = getAuth();
            const {email,password} = this.state;
           
            
            const res = await this.props.loginAPI({ auth : auth,email : email,password: password }).catch(err => err);
            console.log("Login Success ",res);
            if(res){
                
                
                this.setState({
                email: '',
                password: ''
            })
            browserHistory.push('/home');
            window.location.reload();
            }else{
                console.log("Login Failed")
            }
        }
    render(){
        return(
            <div className="container-login">
                <div className="mobile-login">
                    <div className="logo">
                        <img src={logob} alt="" className="logos" />
                    </div>
                    <div className="form-login">
                        <div className="log-title">
                            <p>Masuk</p>
                        </div>
                        <label for="email" className="log-label">Email</label>
                        <input type="text" id="email" className="log-input"  onChange={this.handleChangeText} value={this.state.email}/>
                        <label for="password" className="log-label">Password</label>
                        <input type="password" id="password" className="log-input"  onChange={this.handleChangeText} value={this.state.password} />
                        <Button title="Masuk" onClick={this.handleLogin} loading={this.props.isLoading}></Button>
                        <div className="sublink">
                            <p>Belum punya Akun? <span className="sub-link" onClick={this.handleSublink}>Daftar</span> </p>
                        </div>
                        
                    </div>
                </div>
                <img src={bg} className="main-bg" alt="" />
            </div>
        )
    }
}
const reduxState = (state) =>({
    isLoading : state.isLoading
});
const reduxDispatch = (dispatch)=> ({
   loginAPI : (data) => dispatch(loginUserAPI(data)) 
})
export default connect(reduxState, reduxDispatch) (Login);