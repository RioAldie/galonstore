import React from "react";
import './Invoice.scss';


const Invoice = () =>{

  
        return(
            <div className="container-invoice" id="invoice">
                        <div className="data-order">
                            <div className="box-left">
                               <span className="order-title">{this.state.title}</span> 
                               <span className="order-price">{this.state.price}</span> 
                            </div>
                            <div className="payment-card">
                                <div className="box-payment">
                                    <input type="radio" name="dana" id="dana" className="pay-input" />
                                    <label for="dana" value="dana">Dana</label>
                                </div>
                                <div className="box-payment">
                                    <input type="radio" name="dana" id="gopay" className="pay-input"/>
                                    <label for="gopay" value="gopay">Gopay</label>
                              </div>
                              <div className="box-payment">
                                    <input type="radio" name="dana" id="cod" className="pay-input"/>
                                    <label for="cod" value="cod" >COD</label>
                              </div>
                                
                            </div>
                        </div>
                        <div className="form-order">
                            <div className="box-order-input">
                                <label for="customer" className="order-label">Nama</label>
                                <input type="text" name="customer" id="customer" className="order-input"/>
                            </div>
                            <div className="box-order-input">
                                  <label for="telepone" className="order-label">Telepon</label>
                                  <input type="text" name="telepone" id="telepone" className="order-input"/>
                            </div>
                            <div className="box-order-input">
                                  <label for="alamat" className="order-label">Alamat</label>
                                  <input type="text" name="alamat" id="alamat"  className="order-input"/>
                            </div>
                              
                              <div className="btn-konfirm">Pesan</div>
                              <div className="btn-cancel" onClick={this.handleBatal}>Batal</div>
                        </div>
                      </div>
        )
    
}


export default Invoice;