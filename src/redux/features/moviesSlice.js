import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movieList: [],
  status: 'idle',
};

const apiKey = '21cc7d168db0bf35988d739cf92720f6';

export const fetchTrending = createAsyncThunk('movies/fetchMovies', async (show) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
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
      .addCase(fetchTrending.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchTrending.fulfilled, (state, { payload }) => {
        const keys = Object.keys(payload.results);
        const tempArray = [];
        keys.forEach((key) => {
          tempArray.push(payload.results[key]);
        })
        state.movieList = [...tempArray];
        console.log(state.names);
        state.status = 'successful';
      })
      .addCase(fetchTrending.rejected, (state, action) => ({
        ...state,
        status: 'failed',
      }))
  }
});

export default moviesSlice.reducer;
