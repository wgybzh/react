<<<<<<< HEAD
import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
 const reducers = combineReducers({
     navbar
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store
=======
import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import home from "./reducers/home";
const reducers = combineReducers({
    home,
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
>>>>>>> wsp
