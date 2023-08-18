import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const {id}=useParams()
 
const [data,setdata]=useState({})
  const products=useSelector(store=>store.productsReducer.products)
 
  useEffect(()=>{
const product=products.filter((el)=>el.id===+id)

setdata(product[0])
  },[])
  console.log(data)
  return (
    <div>
      <div>
        <img src={data.image} alt="" />
      </div>
      <h2>{data.name}</h2>
      <p>{data?.price}</p>
      <p>{data?.brand}</p>
      <p>{data?.category}</p>
      <p>{data.gender}</p>
    </div>
  )
}

export default SingleProduct