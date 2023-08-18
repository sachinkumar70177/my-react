import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../page/Login";
import HomePage from "../page/HomePage";
import Admin from "../page/Admin";
import SingleProduct from "../page/SingleProduct";
import EditProduct from "../page/EditProduct";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> (Product List will be displayed
      here)
      <Route
        path="/admin"
        element={
         
            <Admin />
         
        }
      />{" "}
      (For adding products to DB)
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
}

export default AllRoutes;
