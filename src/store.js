import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    usersReducer,
    currentUser,
    loginForm
})
  
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;