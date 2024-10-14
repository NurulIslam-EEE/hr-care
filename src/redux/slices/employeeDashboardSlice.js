import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchTask = createAsyncThunk("taskAssign", async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/taskAssign`
  ).then((res) => res.json());
  return response;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    task: [],
    status: "idle",
  },
  //fetch data
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.task = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchTask.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default taskSlice.reducer;
