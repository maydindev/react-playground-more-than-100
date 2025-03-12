import { createSlice } from '@reduxjs/toolkit'

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    list: [
      {name:"BMW", value:"800000"}
    ],
  },
  reducers: {
    add: (state,action) => {
      //console.log(action)
      state.list.push(action.payload) 
    },
    del: (state,action) => {
      //console.log(action)
      state.list = state.list.filter((car) => car.name !== action.payload.name && car.value !== action.payload.value)
    }
  },
})

export const { add, del } = carsSlice.actions

export default carsSlice.reducer
