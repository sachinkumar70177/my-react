import React, { useEffect } from "react";
import { getProducts } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const DIV = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productsReducer.products);
  const [searchParams,setSearchParams] = useSearchParams();

  let paramObj = {
    params: {
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get("order") ? "price" : null,
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchParams,dispatch]);

  return (
    <DIV>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
    </DIV>
  );
};
