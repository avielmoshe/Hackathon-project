import { createSlice } from "@reduxjs/toolkit";

interface User {
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  phone?: string;
  role: "provider" | "customer" | "guest";
  profileImg?: string;
}
const initialUser: User = {
  role: "guest",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state = { role: "guest" };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
