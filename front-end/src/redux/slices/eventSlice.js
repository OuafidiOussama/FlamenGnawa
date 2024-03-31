import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../../helpers/ErrorExtractor";
import eventServices from "../services/event.service";

const initialState = {
  loading: false,
  events: [],
  event: {},
};

export const getAllEvents = createAsyncThunk(
  "/events/getallevents",
  async (thunkAPI) => {
    try {
      const res = await eventServices.getAll();
      return res.data.Events;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getEventById = createAsyncThunk(
  "/events/event",
  async (id, thunkAPI) => {
    try {
      const res = await eventServices.getById(id);
      return res.data.event;
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createEvent = createAsyncThunk(
  "/events/create",
  async (data, thunkAPI) => {
    try {
      await eventServices.create(data);
      toast.success("Event created Successfully");
      thunkAPI.dispatch(getAllEvents());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const updateEvent = createAsyncThunk(
  "/events/update",
  async (data, thunkAPI) => {
    try {
      const { id, ...rest } = data;
      await eventServices.update(id, rest);
      toast.success("Event Updated Successfully");
      thunkAPI.dispatch(getAllEvents());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteEvent = createAsyncThunk(
  "/events/delete",
  async (id, thunkAPI) => {
    try {
      await eventServices.delete(id);
      toast.success("Event Deleted Successfully");
      thunkAPI.dispatch(getAllEvents());
    } catch (error) {
      const errorMessage = await extractErrorMessage(error.response.data);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.events = payload;
        state.event = {};
      })
      .addCase(getAllEvents.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.event = payload;
      })
      .addCase(getEventById.rejected, (state) => {
        state.loading = false;
      });
  },
});

const eventReducer = EventSlice.reducer;
export default eventReducer;
