import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../services/user.service";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

export const login = createAsyncThunk("/user/login", async (data, thunkAPI) => {
  try {
    const res = await userServices.login(data);
    console.log(res.data);
    if (res.statusText !== 'OK') {
      toast.error('Wrong Email Or Password')
      throw new Error('Wrong Email Or Password');
    }
    const userData = res.data.user;
    localStorage.setItem('user', JSON.stringify(userData  ))
    toast.success('Loggin Successfull')
    return userData;
  } catch (error) {
    toast.error('Wrong Email Or Password')
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
