import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=f9033177&s=$harry`);
  return res.json();
});

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    movies: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      console.log("Pending");
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      console.log("Fulfilled", action.payload);
      state.loading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log("Rejected");
      console.log(action.payload);
      state.loading = false;
    });
  },
});

export default moviesSlice.reducer;
export { fetchMovies };
