import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//get feedbackitems
export const getFeedbackAsync = createAsyncThunk(
  "feedback/getFeedbackAsync",
  async () => {
    try {
      const response = await fetch("http://localhost:3004/productRequests");
      const feedbackItems = await response.json();
      return { feedbackItems };
    } catch (err) {
      console.log(err);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getFeedbackAsync.pending]: (state, action) => {
      console.log("fetching data...");
    },
    [getFeedbackAsync.fulfilled]: (state, action) => {
      console.log("data fetched");
      return action.payload.feedbackItems;
    },
  },
});

// Action creators are generated for each case reducer function
// export const {} = feedbackSlice.actions;

export default feedbackSlice.reducer;
