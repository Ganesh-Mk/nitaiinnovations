import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  name: "",
  email: "",
  likes: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeusername: (state, action) => {
      state.username = action.payload;
    },
    storeLikes: (state, action) => {
      state.likes = action.payload;
    },
    storeName: (state, action) => {
      state.name = action.payload;
    },
    storeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { storeName, storeEmail, storeLikes } = userSlice.actions;
export default userSlice.reducer;
