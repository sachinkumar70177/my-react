import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes"
import axios from "axios"
export const login=(userdata)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    axios.post("https://reqres.in/api/login",userdata)
.then((res)=>{
console.log(res.data)
dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
}).catch((err)=>{
console.log(err.message)
dispatch({type:LOGIN_FAILURE,payload:err.message})
})
}