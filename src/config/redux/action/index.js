import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"; 
import { getDatabase, ref, push, onValue } from "firebase/database";

 
export const registerUserAPI = (data) => (dispatch) => {
    dispatch({type: 'CHANGE_LOADING', value: true});
    return(
        createUserWithEmailAndPassword(data.auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('success',user);
            dispatch({type: 'CHANGE_LOADING', value: false});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false});
        })
    )
}
export const loginUserAPI = (data) => (dispatch) => {

     return new Promise((resolve, reject) =>{
        dispatch({type: 'CHANGE_LOADING', value: true});
        signInWithEmailAndPassword(data.auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const dataUser ={
                email: user.email,
                uid: user.uid
            }
            // ...
            localStorage.setItem('userData',JSON.stringify(dataUser));
            dispatch({type: 'CHANGE_LOADING', value: false});
            dispatch({type: 'CHANGE_USER', value: dataUser});
            dispatch({type: 'CHANGE_LOGIN', value: dataUser });
            resolve(true);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            dispatch({type: 'CHANGE_LOADING', value: false});
            console.log(errorCode, errorMessage);
            reject(false);
        })
    
    })
  
}
export const writeDataToAPI = (data) => (dispatch) =>{
    const db = getDatabase();
  
    dispatch({type: 'CHANGE_LOGIN', value: data }); 
  push(ref(db, 'users/' + data.userId), {
   customer : data.customer,
   title : data.title,
   price : data.price,
   alamat : data.alamat,
   phone : data.telepone,
   date : data.date,
   payment : data.payment
    
  });
}
export const getDataFromAPI = (userId) => (dispatch) =>{
    const db = getDatabase();
    const urlUsers = ref(db, 'users/' + userId);
    new Promise((resolve, reject)=>{
        onValue(urlUsers, (snapshot) => {
        const orders = snapshot.val();
        const data = [];
        Object.keys(orders).map(key =>{
           return data.push({
                id: key,
                data: orders[key]
            })
        })
        // updateStarCount(postElement, book);
        dispatch({type: 'SET_ORDERS',value: data});
        console.log("dataAPI", orders);
        resolve(orders);
      });

    })
    
}