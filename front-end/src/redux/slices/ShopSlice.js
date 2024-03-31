import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";
import shopServices from "../services/shop.service";

const initialState = {
  loading: false,
  products: [],
  product: {},
};

export const getAllProducts = createAsyncThunk(
  "/products/getallproducts",
  async (thunkAPI) => {
    try {
      const res = await shopServices.getAll();
      return res.data.products;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getProductById = createAsyncThunk(
  "/products/product",
  async (id, thunkAPI) => {
    try {
      const res = await shopServices.getById(id);
      return res.data.product;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createProduct = createAsyncThunk(
  "/products/create",
  async (data, thunkAPI) => {
    try {
      await shopServices.create(data);
      toast.success("Product created Successfully");
      thunkAPI.dispatch(getAllProducts());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/products/update",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const { id, ...rest } = data;
      console.log(id);
      await shopServices.update(id, rest);
      toast.success("Product Updated Successfully");
      thunkAPI.dispatch(getAllProducts());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "/products/delete",
  async (id, thunkAPI) => {
    try {
      await shopServices.delete(id);
      toast.success("Product Deleted Successfully");
      thunkAPI.dispatch(getAllProducts());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
        state.product = {};
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.loading = false;
      })
  },
});

const shopReducer = ShopSlice.reducer;
export default shopReducer;
