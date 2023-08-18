import React from "react";
import { Link } from "react-router-dom"; // Fixed typo in import
import styled from "styled-components";

// Styled component for the container
const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Navbar = () => {
  return (
    <DIV>
      <h1>Product List</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/admin">Add Product</Link>
    </DIV>
  );
};
