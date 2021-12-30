import React from "react";
import logos from '../../../assets/logos.svg'
import roket from '../../../assets/roket.svg';
import './ordered.scss';
import { createBrowserHistory } from "history";
function handleBack(){
    const browserHistory = createBrowserHistory()
            browserHistory.push('/home');
            window.location.reload();
}
export default function Ordered(){
    return(
        <section className="container">
           <div className="mobile-ordered">
                <div className="banner-ordered">
                    <div className="sim-logo">
                        <img src={logos} alt="" className="logos"/>
                    </div>
                   
               </div> 
               <div className="ordered-text">Terima kasih Telah Membeli Produk Kami</div>
               <div className="ordered-hero">
                        <img src={roket} alt="" />
                </div>
                <div className="btn-backhome" onClick={handleBack}>Home</div>
           </div>
        </section>
    )
}