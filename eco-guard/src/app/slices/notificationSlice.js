import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, userid: 1, type: "Alert", createDateTime: Date.now(), durationText: "5 mins ago", content: "Benzene percentage is high. Long exposure to benzene can cause various lungs conditions"},
  { id: 2, userid: 1, type: "Danger", createDateTime: Date.now(), durationText: "12 mins ago", content: "You Lost 8 mins worth of your lifespan"},
  { id: 3, userid: 2, type: "Normal", createDateTime: Date.now(), durationText: "5 mins ago", content: "You can see notifications by auth userid"}
]

const notificationSlice = createSlice({
  name: 'notification',
  initialState
});

export default notificationSlice.reducer;