import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchedProducts = createAsyncThunk(
  "products/asyncProducts",
  async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    return res.data;
  }
);
export const selectedProducts = createAsyncThunk(
  "products/asyncSelectedProduct",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/?id=${id}`);
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    selectedItem: {},
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    removeSelectedItem: (state) => (state.selectedItem = {}),
  },
  extraReducers: {
    [fetchedProducts.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, products: payload };
    },
  },
});

export const { addItem, removeItem, removeSelectedItem } = cartSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getCartItems = (state) => state.products.cart;
export default cartSlice.reducer;
