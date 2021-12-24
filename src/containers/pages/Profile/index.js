import React, { Component, Fragment } from "react";
import logos from '../../../assets/logos.svg'
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";
import { ChatBar, HelpBar, Homebar, UserBar } from "../../../components/atoms/navbar";
import './Profile.scss';
import { getDataFromAPI } from "../../../config/redux/action";

class Profile extends Component{

    state = {
        email: ''
    }

    componentDidMount (){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getOrders(userData.uid);
        console.log(userData.email)
        this.setState({
            email : userData.email
        })

    }
    handleNav = (e)=>{
        const target = e.target;
        
        const browserHistory = createBrowserHistory()
            browserHistory.push(`/${target.id}`);
            window.location.reload();
    }
  
    render(){
       
        const {Orders} = this.props;
        return(
            <div className="container-profile">
                <div className="overflow">
                    <div className="nav-profile">
                        <div className="home-bar bar" id="home" onClick={this.handleNav}>
                            <Homebar status={false} go={this.handleNav}></Homebar>
                        Home
                        </div>
                        <div className="chat-bar bar">
                            <ChatBar status={false}></ChatBar>
                        Chat
                        </div>
                        <div className="help-bar bar" id="tutor" onClick={this.handleNav}>
                            <HelpBar color="#002E74" status={false} onClick={this.handleNav}></HelpBar>
                            Help
                        </div>
                        <div className="profile-bar active bar">
                           <UserBar status={true} onClick={this.handleNav}></UserBar>
                            Profile
                        </div>
                    </div>
                    <div className="mobile-profile">
                        <div className="banner">
                            <div className="sim-logo">
                                <img src={logos} alt="" className="logos" />
                            </div>
                        </div>
                        
                    <div className="listOrder-container">
                        <div className="profile-card">
                            <div className="poto-circle">
                            </div>
                            <div className="profiles">
                                <span className="list-text">Hi, {this.state.email} </span>
                                <span className="list-textb">Saldo 700000</span>
                            </div>
                        </div>
                        <div className="box-listTitle">
                            Riwayat Order : {Orders.length}
                        </div>
                        
                  
                        {
                            Orders.length > 0 ?(
                                <Fragment>
                                    {
                                        Orders.map(order => {
                                          
                                            return(
                            <div className="card-list" key={order.id}>
                                <div className="box-list">
                                    <span className="list-text">{order.data.title}</span>
                                    <span className="list-textb">{order.data.price} </span>
                                </div>
                                <div className="box-list">
                                    <span className="list-text">{}</span>
                                    <span className="list-text">Payment : <span className="text-pay">{order.data.payment}</span>  </span>
                                </div>
                                {/* <div className="box-list">
                                    <span>Status</span>
                                </div> */}
                            </div>
                                )
                                        })
                                    }
                                </Fragment>
                            ) : null
                        }
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
const reduxState = (state) =>({
    Orders : state.orders
});
const reduxDispatch = (dispacth) => ({
    getOrders : (data) => dispacth(getDataFromAPI(data))
});

export default connect(reduxState,reduxDispatch) (Profile);