import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer as authreducer } from "./AuthReducer/reducer";
import { CourseReducer as coursereducer } from "./CourseReducer/reducer";

const rootReducer = combineReducers({
  authreducer,coursereducer
  
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };