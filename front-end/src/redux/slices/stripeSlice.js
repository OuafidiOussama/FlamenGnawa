import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { extractErrorMessage } from "../../helpers/ErrorExtractor";
import stripeServices from "../services/stripe.service";

const initialState = {
  loading: false,
};

export const createCheckoutSession = createAsyncThunk(
  "/stripe/createcheckoutsession",
  async (data, thunkAPI) => {
    try {
      const res = await stripeServices.createCheckout(data);
      
      if(res.data.url) {
        window.location.href = res.data.url
      }
    } catch (error) {
    //   const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



const StripeSlice = createSlice({
  name: "stripe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCheckoutSession.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createCheckoutSession.rejected, (state) => {
        state.loading = false;
      })
  },
});

const stripeReducer = StripeSlice.reducer;
export default stripeReducer;
