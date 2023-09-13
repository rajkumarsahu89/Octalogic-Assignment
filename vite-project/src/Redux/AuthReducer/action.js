import axios from "axios"
import * as types from "./actionType"

export const postLogn = (data) => async (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQ });
    try {
      const res = await axios.post(`https://render-api-go2p.onrender.com/login`, data);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
      return res.data; 
    } catch (err) {
      console.error(err);
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
      throw err; 
    }
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("token");
    return {
      type: types.USER_LOGOUT,
    };
  };
  
  
  
  