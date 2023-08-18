import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actiontypes";

// Action creator to add a new product
export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  // Make a POST request to add the new product
  axios
    .post("http://localhost:3001/data", newProduct)
    .then((res) => {
      console.log(res.data);
      // Dispatch a POST_PRODUCT_SUCCESS action upon successful response
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      console.log(err.message);
      // Dispatch a PRODUCT_FAILURE action upon error
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const getProducts = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get("http://localhost:3001/data", obj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: PRODUCT_FAILURE });
    });
};


// 
export const patchproducts = (id,newProduct) => (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
  
    // Make a POST request to add the new product
    axios
      .patch(`http://localhost:3001/data/${id}`, newProduct)
      .then((res) => {
        console.log(res.data);
        // Dispatch a POST_PRODUCT_SUCCESS action upon successful response
        dispatch({ type: PATCH_PRODUCT_SUCCESS});
      })
      .catch((err) => {
        console.log(err.message);
        // Dispatch a PRODUCT_FAILURE action upon error
        dispatch({ type: PRODUCT_FAILURE });
      });
  };