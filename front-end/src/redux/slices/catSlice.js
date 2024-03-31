import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryServices from "../services/category.service";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";

const initialState = {
  loading: false,
  categories: [],
  category: {},
};

export const getAllCategories = createAsyncThunk(
  "/categories/getallcategories",
  async (thunkAPI) => {
    try {
      const res = await categoryServices.getAll();
      return res.data.categories;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getCategoryById = createAsyncThunk(
  "/categories/category",
  async (id, thunkAPI) => {
    try {
      const res = await categoryServices.getById(id);
      return res.data.category;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createCategory = createAsyncThunk(
  "/categories/create",
  async (data, thunkAPI) => {
    try {
      await categoryServices.create(data);
      toast.success("Category created Successfully");
      thunkAPI.dispatch(getAllCategories());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateCategory = createAsyncThunk(
  "/categories/update",
  async (data, thunkAPI) => {
    try {
      const { id, ...rest } = data;
      console.log(id);
      await categoryServices.update(id, rest);
      toast.success("Category Updated Successfully");
      thunkAPI.dispatch(getAllCategories());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "/categories/delete",
  async (id, thunkAPI) => {
    try {
      await categoryServices.delete(id);
      toast.success("Category Deleted Successfully");
      thunkAPI.dispatch(getAllCategories());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
        state.category = {};
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.category = payload;
      })
      .addCase(getCategoryById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      })
      .addCase(createCategory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.loading = false;
      });
  },
});

const catReducer = catSlice.reducer;
export default catReducer;
