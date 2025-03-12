import { createSlice } from '@reduxjs/toolkit'
import { createRandomSong } from '../data'

const initialState = {
  songData: []
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state) => {
      state.songData.push(createRandomSong())  
    },
    removeSong: (state, action) => {
        state.songData = state.songData.filter((song) => song !== action.payload)
    },
    resetSong: (state) => {
        state.songData = [] 
    },
  },
})

export const { addSong, removeSong, resetSong } = songSlice.actions

export default songSlice.reducer