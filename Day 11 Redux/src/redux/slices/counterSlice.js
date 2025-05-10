import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      console.log("Increae Counter", action);
      state.counter += 1;
    },
    decreaseCount: (state, action) => {
      console.log("Decrease Count", action);
      state.counter -= 1;
    },
  },
});

export default counterSlice.reducer;

export const { increaseCount, decreaseCount } = counterSlice.actions;
