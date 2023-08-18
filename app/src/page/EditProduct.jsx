import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {styled}  from "styled-components"
import { addProduct, patchproducts } from "../Redux/Products/action";
import { useParams } from "react-router-dom";
const initial = {
  name: "",
  image: "",
  brand: "",
  price: 0,
  gender: "",
  category: "",
};
function Admin() {
  const {id}=useParams()
  console.log(id)
  const [data, setData] = useState(initial);
  const dispath=useDispatch()
  const products=useSelector(store=>store.productsReducer.products)
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: name==="price"?+value:value };
    });
  };
  const handlesubmit=(e)=>{
e.preventDefault()
dispath(patchproducts(id,data))


  }
  useEffect(()=>{
const  product=products.find((el)=>el.id===+id)

setData(product)
  },[])
  console.log(data)
  return (
    <DIV>
    <form onSubmit={handlesubmit}>
      <h1>Edit Products</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        onChange={handlechange}
        name="name"
        value={data.name}
      />
      <label htmlFor="Image">Image</label>
      <input
        type="text"
        placeholder="Image"
        onChange={handlechange}
        name="image"
        value={data.image}
      />
      <label htmlFor="Brand">Brand</label>
      <input
        type="text"
        placeholder="Brand"
        onChange={handlechange}
        name="brand"
        value={data.brand}
      />
      <label htmlFor="Price">Price</label>
      <input
        type="number"
        placeholder="Price"
        onChange={handlechange}
        name="price"
        value={data.price}
      />
      <select onChange={handlechange} value={data.gender} name="gender">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
     
      <select name="category" onChange={handlechange} value={data.category}>
        <option value="">Select Category</option>
        <option value="top-wear">Top Wear</option>
        <option value="bottom-wear">Bottom wear</option>
      </select>
      <button type="submit">Add Products</button>
    </form>
    </DIV>
  );
}
const DIV=styled.div`
width: 400px;
margin: auto ;
border: 1px red solid;
padding: 30px;
    form{
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
    }
     
     input,select{
        height :40px;
        width: 100%;
        font-size: larger;
     }
     button{
        width: 50%;
        height: 35px;
        border: none;
        cursor: pointer;
     }
`
export default Admin;


