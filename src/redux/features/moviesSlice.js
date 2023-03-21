import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movieList: [],
  status: 'idle',
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (show) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
})

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state) => ({
        ...state,
        status: 'laoding',
      }))
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload[key]);
        })
        state.movieList = [...tempArray];
        state.status = 'successful';
      })
      .addCase(fetchMovies.rejected, (state, action) => ({
        ...state,
        status: 'failed',
      }))
  }
});

export default moviesSlice.reducer;
