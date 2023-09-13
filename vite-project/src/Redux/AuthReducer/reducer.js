import * as types from "./actionType"

const initState={
    token:{},
    isError:false,
    isAuth:false
}

export const AuthReducer=(state=initState,{type,payload})=>{
switch(type)
{
    case types.USER_LOGIN_REQ:
        return{
            ...state,
            isError:false,isAuth:false
        }
    case types.USER_LOGIN_SUCCESS:
        return{
            ...state,
            isError:false,
            token:payload,isAuth:true
        }
    case types.USER_LOGIN_FAILURE:
        return{
            ...state,
            isError:true,isAuth:false
        }
        case types.USER_LOGOUT:
      return {
        ...state,
        token: null,
      };
        default:
            return state;
}
    }
    
