import React from "react";

export const Button = ({ title, onClick, loading }) =>{
    console.log(loading);
    if(loading === true){
      return  <button className="reg-btn disable" onClick={onClick}> loading..  </button>
    }
    return(
        <button className="reg-btn" onClick={onClick}> {title}  </button>
    )
}