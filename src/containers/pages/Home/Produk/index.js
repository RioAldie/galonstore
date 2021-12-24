import React from "react";


const Produk = (produk) =>{
    
    return   <div className="card" >
    <div className="produk-imgbox">
        <img  src={produk.data.gambar} className="produk-img" alt=""/>
    </div>
    <div className="produk-data">
        <p className="produk-title">{produk.data.title}</p>
        <p className="produk-price">{produk.data.price} </p>
    </div>
    <div className="btn-order" >
       <button className="btn-buy" onClick={()=> produk.goDetail( produk.data.id)} >Beli</button> </div>
    </div>
        
}

export default Produk;