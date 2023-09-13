import * as types from "./actionType"

const initState={
    course:[],
    isError:false
}

export const CourseReducer=(state=initState,{type,payload})=>{
switch(type)
{
    case types.GET_COURSE_REQ:
        return{
            ...state,
            isError:false,
        }
    case types.GET_COURSE_SUCCESS:
        return{
            ...state,
            isError:false,
            course:payload
        }
    case types.GET_COURSE_FAILIURE:
        return{
            ...state,
            isError:true,
        }
        default:
            return state;
}
    }
    
