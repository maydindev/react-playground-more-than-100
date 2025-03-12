import { createSlice } from "@reduxjs/toolkit";

const users = [
    { userid: 1, username: "admin", password: "123456", fullname: "Namık Korona"},
    { userid: 2, username: "a", password: "1", fullname: "N K" },
  ];

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const foundUser = users.find(
        (user) => user.username === username && user.password === password 
      );

      if (foundUser) {
        state.user = foundUser;
        state.error = null;
      } else {
        state.error = "Geçersiz kullanıcı adı veya şifre";
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
