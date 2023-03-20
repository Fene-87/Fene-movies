import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
});

export default moviesSlice.reducer;
