import React from "react";
import { createBrowserHistory } from "history";


 const handleNav = (e)=>{
    const target = e.target;
    
    const browserHistory = createBrowserHistory()
        browserHistory.push(`/${target.id}`);
        console.log(target.id)
        window.location.reload();
}

export const Homebar = (color)=>{
   
    // if(post.status === true){
        
    //     handleClass("chat");
    // }
    return(
    <svg xmlns="http://www.w3.org/2000/svg" id="home" onClick={handleNav}  width="38" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color={color} className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    )
}
export const ChatBar = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" id="chat" width="38" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" color="#C4C4C4" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    )
}
export const HelpBar = (color)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleNav} id="tutor" width="38" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" color={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    )
}
export const UserBar =(color)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" id="profile" onClick={handleNav} width="38" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color={color} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user "  ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )
}