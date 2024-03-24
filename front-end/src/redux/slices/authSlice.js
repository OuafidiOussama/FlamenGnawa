import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../services/user.service";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";

const initialState = {
  loading: false,
  isSuccessfull: false,
  isAuthenticated: localStorage.getItem("user") ? true : false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const login = createAsyncThunk("/user/login", async (data, thunkAPI) => {
  try {
    const res = await userServices.login(data);

    const userData = res.data;
    localStorage.setItem("user", JSON.stringify(userData.user));
    localStorage.setItem("token", JSON.stringify(userData.jwtToken));
    toast.success("Loggin Successfull");
    return userData;
  } catch (error) {
    const errorMessage = await extractErrorMessage(error.response.data);
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const register = createAsyncThunk(
  "/user/register",
  async (data, thunkAPI) => {
    try {
      let res = await userServices.register(data);
      toast.success("Registration Successfull");
      return res;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "/user/logout",
  async (thunkAPI) => {
    try {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      toast.success("Logout Successfull");
      setTimeout(()=>{
        window.location.reload()
      }, 1000)
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccessfull = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.isSuccessfull = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = payload.user;
        state.token = payload.jwtToken;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
