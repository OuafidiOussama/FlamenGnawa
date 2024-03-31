import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";
import blogServices from "../services/blog.service";

const initialState = {
  loading: false,
  articles: [],
  article: {},
};

export const getAllArticles = createAsyncThunk(
  "/blog/getallarticles",
  async (thunkAPI) => {
    try {
      const res = await blogServices.getAll();
      return res.data.posts;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getArticleById = createAsyncThunk(
  "/blog/getArticle",
  async (id, thunkAPI) => {
    try {
      const res = await blogServices.getById(id);
      return res.data.post;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createArticle = createAsyncThunk(
  "/blog/create",
  async (data, thunkAPI) => {
    try {
      await blogServices.create(data);
      toast.success("Article created Successfully");
      thunkAPI.dispatch(getAllArticles());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateArticle = createAsyncThunk(
  "/blog/update",
  async (data, thunkAPI) => {
    try {
      const { id, ...rest } = data;
      await blogServices.update(id, rest);
      toast.success("Article Updated Successfully");
      thunkAPI.dispatch(getAllArticles());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteArticle = createAsyncThunk(
  "/blog/delete",
  async (id, thunkAPI) => {
    try {
      await blogServices.delete(id);
      toast.success("Article Deleted Successfully");
      thunkAPI.dispatch(getAllArticles());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const BlogSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllArticles.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.articles = payload;
        state.article = {};
      })
      .addCase(getAllArticles.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getArticleById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticleById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.article = payload;
      })
      .addCase(getArticleById.rejected, (state) => {
        state.loading = false;
      })
  },
});

const blogReducer = BlogSlice.reducer;
export default blogReducer;
