import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

// Styled component for the product card wrapper
const PRODUCTWRAPPER = styled.div`
  border: 1px solid gray;
  margin: auto;
  padding: 30px;
`;

// ProductCard component
export const ProductCard = ({
  name,
  image,
  brand,
  price,
  category,
  gender,
  id
}) => {
    const navigate=useNavigate()
  
  const handleclick=(id)=>{
navigate(`/products/${id}` )

  }
  return (
    <PRODUCTWRAPPER>
      <div onClick={()=>handleclick(id)}>
        <img src={image} alt="Product" />
      </div>

      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
        <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
    </PRODUCTWRAPPER>
  );
};
