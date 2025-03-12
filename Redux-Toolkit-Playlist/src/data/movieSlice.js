import { createSlice } from '@reduxjs/toolkit'
import { createRandomMovie } from '../data'

const initialState = {
  movieData: []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state) => {
      state.movieData.push(createRandomMovie())  
    },
    removeMovie: (state, action) => {
        state.movieData = state.movieData.filter((movie) => movie !== action.payload)
    },
    resetMovie: (state) => {
        state.movieData = [] 
    },
  },
})

export const { addMovie, removeMovie, resetMovie} = movieSlice.actions

export default movieSlice.reducer