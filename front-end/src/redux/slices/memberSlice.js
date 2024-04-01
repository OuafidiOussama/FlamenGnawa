import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";
import memberServices from "../services/member.service";

const initialState = {
  loading: false,
  members: [],
  member: {},
};

export const getAllMembers = createAsyncThunk(
  "/members/getallmembers",
  async (thunkAPI) => {
    try {
      const res = await memberServices.getAll();
      return res.data.members;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getMemberById = createAsyncThunk(
  "/members/member",
  async (id, thunkAPI) => {
    try {
      const res = await memberServices.getById(id);
      return res.data.member;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createMember = createAsyncThunk(
  "/members/create",
  async (data, thunkAPI) => {
    try {
      await memberServices.create(data);
      toast.success("Member created Successfully");
      thunkAPI.dispatch(getAllMembers());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateMember = createAsyncThunk(
  "/members/update",
  async (data, thunkAPI) => {
    try {
      const { id, ...rest } = data;
      await memberServices.update(id, rest);
      toast.success("Member Updated Successfully");
      thunkAPI.dispatch(getAllMembers());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteMember = createAsyncThunk(
  "/members/delete",
  async (id, thunkAPI) => {
    try {
      await memberServices.delete(id);
      toast.success("Member Deleted Successfully");
      thunkAPI.dispatch(getAllMembers());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const MembersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMembers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.members = payload;
        state.member = {};
      })
      .addCase(getAllMembers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMemberById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMemberById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.member = payload;
      })
      .addCase(getMemberById.rejected, (state) => {
        state.loading = false;
      });
  },
});

const memberReducer = MembersSlice.reducer;
export default memberReducer;
