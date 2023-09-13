import axios from "axios";
import * as types from "./actionType"

export const postCourse = (data)=> async (dispatch)=>{
    dispatch({ type: types.POST_COURSE_REQ });
    try {
      const res = await axios.post(`https://render-api-go2p.onrender.com/mock`, data);
      dispatch({ type: types.POST_COURSE_SUCCESS, payload: res.data });
      console.log(res)
      return res.data; 
    } catch (err) {
      console.error(err);
      dispatch({ type: types.POST_COURSE_FAILIURE, payload: err });
      throw err; 
    }

}

export const getCourse = (data)=> async (dispatch)=>{
    dispatch({ type: types.GET_COURSE_REQ });
    try {
      const res = await axios.get(`https://render-api-go2p.onrender.com/mock`, data);
      dispatch({ type: types.GET_COURSE_SUCCESS, payload: res.data });
    //   console.log(res)
      return res.data; 
    } catch (err) {
      console.error(err);
      dispatch({ type: types.GET_COURSE_FAILIURE, payload: err });
      throw err; 
    }

}