import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { UsersState } from "./types";

// Define the initial state using that type
const initialState: UsersState = {
  users: [],
  isUserLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    requestUser: (state) => {
      state.isUserLoading = true;
    },
    usersSuccess: (state, action: PayloadAction<string[]>) => {
      state.users = action.payload;
      state.isUserLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    usersFail: (state, action: PayloadAction<string[]>) => {
      state.users = action.payload;
    },
  },
});

export const { requestUser, usersSuccess, usersFail } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUsers = (state: RootState) => state.userState.users;

export default usersSlice.reducer;
