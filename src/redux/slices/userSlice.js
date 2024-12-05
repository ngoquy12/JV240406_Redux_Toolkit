import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUser, removeUser } from "../../services/userService";
import { FAILED, PENDING, SUCCESSFULLY } from "../../constants/promiseStatus";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUser.pending, (state, action) => {
        state.status = PENDING;
      })
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.status = SUCCESSFULLY;
        state.data = action.payload;
      })
      .addCase(fetchAllUser.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.status = SUCCESSFULLY;
        state.data = state.data.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
