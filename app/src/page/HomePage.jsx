import React from "react";
import { ProductList } from "../Components/ProductList"; // Fixed import path
import  {Sidebar}  from "../Components/Sidebar"; // Fixed import path
import styled from "styled-components";

// Styled component for the wrapper
const WRAPPER = styled.div`
  display: flex;
  margin-top: 10px;

  .sidebar{
    width: 15%;
  }
  .product-list{
    width: 85%;
  }
`;

// HomePage component
const HomePage = () => {
  return (
    <WRAPPER>
      <div className="sidebar">
        <Sidebar /> {/* Render the Sidebar component */}
      </div>
      <div className="product-list">
        <ProductList /> {/* Render the ProductList component */}
      </div>
    </WRAPPER>
  );
};
export default HomePage;
