import React, { Component, Fragment } from "react";
import './Home.scss';
import logos from '../../../assets/logos.svg';
import data from '../../../config/json/data.json';
import Produk from "./Produk";
import { connect } from "react-redux";
import { ChatBar, HelpBar, Homebar, UserBar } from "../../../components/atoms/navbar";
import { writeDataToAPI } from "../../../config/redux/action";
import { createBrowserHistory } from "history";


class Home extends Component{
    state = {
        product: '',
        tes : 0,
        id: 1,
        title :'',
        price: '',
        jenis:'',
        gambar: '',
        payment: '',
        customer: '',
        alamat: '',
        telepone:''

    }
    
   
       
    handlePay = (e) =>{
    
        const pay = e.target.value;
        this.setState({
            payment: pay
        });
        
    }
    handleChangeText = (e) =>{
        this.setState({
            [e.target.id] : e.target.value,
        })
        
        
    }
    handleOrder = ()=>{
        const {customer,payment,alamat,telepone,title,price} = this.state;
        const {saveOrder} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));
       const data ={
           customer : customer,
           payment : payment,
           alamat : alamat,
           telepone: telepone,
           title:title,
           price: price,
           date: new Date().getTime(),
           userId : userData.uid
       }
       saveOrder(data);
       console.log(data);


       this.setState({
           customer: '',
           alamat : '',
           telepone : ''
       })
    }
    
    handleBuy = (id)=>{
         
        const invoice = document.getElementById("invoice");
        invoice.classList.add("visible")
        data.forEach(element => {
           if(id === element.id){
               
               this.handleState(element);
               
           }
        
        });  
    }
    handleState = (data)=>{
        
       
        this.setState({
            id: data.id,
            title: data.title,
            price: data.price,
            
         })
        
    }
    handleBatal =()=>{
        const invoice = document.getElementById("invoice");
        invoice.classList.remove("visible")
    }
    handleNav = (e)=>{
        const target = e.target.id;
        const browserHistory = createBrowserHistory()
            browserHistory.push(`/${target}`);
            window.location.reload();
    }
   
    
    render(){
        const {customer,alamat,telepone} = this.state;
        return(
            <div className="container-home">
        <div className="overflow">
       
        <div className="nav-home">
                <div className="home-bar bar active">
                    <Homebar color="#002E74" status={true}></Homebar>
                    Home
                </div>
                <div className="chat-bar bar">
                    <ChatBar status={false}></ChatBar> 
                    Chat
                </div>
                <div className="help-bar bar">
                    <HelpBar status={false}></HelpBar>
                    Help
                </div>
                <div className="profile-bar bar" id="profile" onClick={this.handleNav}>
                    <UserBar status={false} ></UserBar>
                    Profile
                </div>
          </div>
        <div className="mobile-home">
          <div className="banner">
            <div className="sim-logo">
                <img src={logos} alt="" className="logos" />
                <div className="banner-text-home banner-bg">
                    
                    <div className="banner-title">
                        <p>More Fresh And Healty</p>
                    </div>
                    <div className="banner-subtitle">
                        <p>Air Minum dari gunung alami yang di ekstrak dengan teknologi tinggi untuk menjaga kealamian dan kesegaranya</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="product-container">
              <div  className="product-bar">
                  <p onClick={this.tes}>Galon</p>
                  <p>Botol</p>
                  <p>Gelas</p>
              </div>
              {
                
                  <Fragment>
                      {  
                          data.map(produk =>{

                              return <Produk key={produk.id} data={produk} goDetail={this.handleBuy} ></Produk>
                                  
                        })
                          
                      }
                  </Fragment>
              }
            
                
              
              
          </div>
         
        </div>
        {    
                        <div className="container-invoice" id="invoice">
                        <div className="data-order">
                            <div className="box-left">
                               <span className="order-title">{this.state.title}</span> 
                               <span className="order-price">{this.state.price}</span> 
                            </div>
                            <div className="payment-card">
                                <div className="box-payment">
                                    <input type="radio" name="dana" id="dana" className="pay-input" onChange={this.handlePay} value="dana" />
                                    <label for="dana" >Dana</label>
                                </div>
                                <div className="box-payment">
                                    <input type="radio" name="dana" id="gopay" className="pay-input" onChange={this.handlePay} value="gopay"/>
                                    <label for="gopay" >Gopay</label>
                              </div>
                              <div className="box-payment">
                                    <input type="radio" name="dana" id="cod" className="pay-input" onChange={this.handlePay} value="cod"/>
                                    <label for="cod" >COD</label>
                              </div>
                                
                            </div>
                        </div>
                        <div className="form-order">
                            <div className="box-order-input">
                                <label for="customer"  className="order-label">Nama</label>
                                <input type="text" name="customer" id="customer" className="order-input" value={customer} onChange={this.handleChangeText} />
                            </div>
                            <div className="box-order-input">
                                  <label for="telepone" className="order-label">Telepon</label>
                                  <input type="text" name="telepone" id="telepone" className="order-input" value={telepone} onChange={this.handleChangeText}/>
                            </div>
                            <div className="box-order-input">
                                  <label for="alamat" className="order-label">Alamat</label>
                                  <input type="text" name="alamat" id="alamat"  className="order-input" value={alamat} onChange={this.handleChangeText}/>
                            </div>
                              
                              <div className="btn-konfirm" onClick={this.handleOrder}>Pesan</div>
                              <div className="btn-cancel" onClick={this.handleBatal}>Batal</div>
                        </div>
                      </div>
              }
      
         </div>
    </div>
        )
    }
}
const reduxState = (state) =>({
    userData : state.user,
    Order: state.orders
})
const reduxDispatch = (dispatch)=>({
    saveOrder : (data) => dispatch(writeDataToAPI(data))
})

export default connect(reduxState,reduxDispatch) (Home);