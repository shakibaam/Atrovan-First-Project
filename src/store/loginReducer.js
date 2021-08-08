import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  username: "",
  password: "",
  validate: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: INITIAL_STATE,
  reducers: {
    //need a reducer to set usr and pass of state from iput
    setUserAndPass(state, action) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.validate = true;
      
    },

    resetValidate(state, action) {
      state.validate = action.payload.validate;
    },
  },
});

export const { setUserAndPass, resetValidate } = loginSlice.actions;

export const login = (username, password) => async (dispatch) => {
  try {
    const data = await axios.post(
      "https://demo.thingsboard.io/api/auth/login",
      { username: username, password: password }
    );

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("refrsh token", data.data.refreshToken);

    dispatch(setUserAndPass({ username: username, password: password }));
  } catch (ex) {
    console.log("error occured !");
    toast.error("Login Failed!!");
  }
};

const loginReducer = loginSlice.reducer;

export default loginReducer;
