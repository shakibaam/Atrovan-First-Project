import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';
import axios from "axios";




const INITIAL_STATE = {
  devices: [],
  loading: true,
};

const homeSlice = createSlice({
  name: "home",
  initialState: INITIAL_STATE,
  reducers: {
    getDevices(state, action) {
      state.devices = action.payload.devices;
      state.loading = false;
    },

    getDevicesFail(state, action) {
      state.loading = true;
    },
  },
});

const { getDevices, getDevicesFail } = homeSlice.actions;

export const getDeviceFromApi = () => async (dispatch) => {
  
  try {
      console.log('here');
    const response = await axios.get(
      "http://demo.thingsboard.io/api/tenant/deviceInfos?deviceProfileId=3b00e220-2668-11eb-85ee-f936949cce2a&pageSize=100&page=0",
      {
        headers: {
          "X-Authorization": "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    // console.log(response.data);

    dispatch(getDevices({ devices: response.data.data }));
  } catch (ex) {
    console.log("error occured !");
    dispatch(getDevicesFail());
  }
};




const devices = homeSlice.reducer;

export default devices;
