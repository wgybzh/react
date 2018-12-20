import {createStore,applyMiddleware,combineReducers} from 'redux'
import navbar from "../store/reducers/list/navBar"
import  reduxpromisemiddle from 'redux-promise-middleware'
 const reducers = combineReducers({
     navbar
 })
const store = createStore(reducers,applyMiddleware(reduxpromisemiddle()));
export default store