import { combineReducers } from "redux";
import { appReducer } from "../app/appReducer";
import { counterReducer } from "../counters/counterReducer";
import { postsReducer } from "../posts/postsReducer";
import {employeeReducer} from "../emploee/reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    app: appReducer,
    employees: employeeReducer
})