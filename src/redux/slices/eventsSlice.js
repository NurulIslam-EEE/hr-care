import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchAnnouncement = createAsyncThunk(
  "announcement/fetchEvents",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/announcement`
    ).then((res) => res.json());
    return response;
  }
);

const eventsSlice = createSlice({
  name: "announcement",
  initialState: {
    discover: [],
    status: "idle",
  },

  //fetch data
  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncement.fulfilled, (state, action) => {
      state.services = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchAnnouncement.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default eventsSlice.reducer;
