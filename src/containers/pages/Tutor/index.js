import React from "react";
import { Component } from "react";
import logos from '../../../assets/logos.svg';
import phone from '../../../assets/mobile-phon.svg';
import shoper from '../../../assets/shopper.svg';
import aprove from '../../../assets/approve.svg';
import deliver from '../../../assets/home-delivery.svg';
import { createBrowserHistory } from "history";

import { ChatBar, HelpBar, Homebar, UserBar } from "../../../components/atoms/navbar";
import './tutor.scss'

class Tutor extends Component{
    handleNav = (e)=>{
        const target = e.target;
        
        const browserHistory = createBrowserHistory()
            browserHistory.push(`/${target.id}`);
            window.location.reload();
    }
    render(){
        return(
            <div className="container-faq">
            <div className="overflow-faq">
                <div className="nav-faq">
                    <div className="home-bar bar" id="home" onClick={this.handleNav}>
                        <Homebar status={false}></Homebar>
                    Home
                    </div>
                    <div className="chat-bar bar">
                        <ChatBar status={false}></ChatBar>
                    Chat
                    </div>
                    <div className="help-bar active bar" id="tutor" onClick={this.handleNav}>
                        <HelpBar status={true}></HelpBar>
                        Help
                    </div>
                    <div className="profile-bar bar" id="profile" onClick={this.handleNav}>
                       <UserBar status={false}></UserBar>
                        Profile
                    </div>
                </div>
                <div className="mobile-faq">
                    <div className="faq-head">
                        <img src={logos} alt="" />
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-card">
                            <div className="faq-box">
                                <div className="faq-circle">
                                    <img src={phone} alt=""></img>
                                </div>
                            </div>
                            <div className="faqcard-text">
                            Masuk Ke Website kami melalui Smartphone atau laptop anda
                            </div>
                        </div>
                        <div className="faq-card">
                            <div className="faq-box">
                                <div className="faq-circle">
                                    <img src={shoper} alt=""></img>
                                </div>
                            </div>
                            <div className="faqcard-text">
                            Pilih Produk dan masukan data sesuai ketentuan, lalu klik Order
                            </div>
                        </div>
                        <div className="faq-card">
                            <div className="faq-box">
                                <div className="faq-circle">
                                    <img src={aprove} alt=""></img>
                                </div>
                            </div>
                            <div className="faqcard-text">
                            Setelah muncul notifikasi mohon tunggu orderan anda akan segera diantar oleh kurir kami
                            </div>
                        </div>
                        <div className="faq-card">
                            <div className="faq-box">
                                <div className="faq-circle">
                                    <img src={deliver} alt=""></img>
                                </div>
                            </div>
                            <div className="faqcard-text">
                            Setelah paket sampai jangan lupa membayar pesananmu ke kurir kami, Terima kasih.
                            </div>
                        </div>
                    </div>
                  
                    {/* <div className="medsos">
                        <img className="social-icon" src={fb}></img>
                        <img className="social-icon" src={ig}></img>
                        <img className="social-icon" src={tw}></img>
                    </div> */}
                </div>
            </div>
        </div>
        )
    }
}

export default Tutor;
