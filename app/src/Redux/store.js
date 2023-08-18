import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
// import {reducer as authReducer} from "./Authentication/reducer"
import thunk from 'redux-thunk'
import {reducer as authReducer} from "./Authentication/reducer"
import {reducer as productsReducer }  from "./Products/reducer"
const rootReducer=combineReducers({
    auth:authReducer,
  productsReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
