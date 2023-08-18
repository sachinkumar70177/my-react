import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/Authentication/action'
import { Navigate } from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState("eve.holt@reqres.in")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const isAuth=useSelector(store=>store.auth.isAuth)
  console.log(isAuth)
  const handlesubmit=(e)=>{
    e.preventDefault()
    const obj={
      email,password
    }
dispatch(login(obj))

  }
  if(isAuth){
    return <Navigate to="/" />
  }
  return (
   <form onSubmit={handlesubmit}>
<label htmlFor="Email">Email : </label>

    <input type="email" placeholder='Enter your Email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br />
    <label htmlFor="Password">Password : </label>
   
    <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    
    <button type='submit'>Login</button>
   </form>
  )
}

export default Login