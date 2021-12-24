const initialState = {
    isLogin : false,
    popup : "boy",
    user : {},
    orders: [],
    isLoading: false

  }

const reducer = (state = initialState,Action)=>{
    if(Action.type === "CHANGE_LOADING"){
      return{
        ...state,
        isLoading : Action.value,
      }
    }
    if(Action.type === "CHANGE_LOGIN"){
      return{
        ...state,
        isLogin : Action.value,
      }
    }
    if(Action.type === "CHANGE_USER"){
      return {
        ...state,
        user: Action.value
      }
    }
    if(Action.type === "SET_ORDERS"){
      return {
        ...state,
        orders: Action.value
      }
    }
    return state;
  }

export default reducer;