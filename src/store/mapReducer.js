import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";

const INITIAL_STATE = {
  locations: [],
  loading : true
};

const mapSlice = createSlice({
  name: "map",
  initialState: INITIAL_STATE,
  reducers: {
    addLocation(state, action) {
      state.locations = action.payload.locations;
      state.loading = false;
    },
  },
});

const { addLocation } = mapSlice.actions;

export const getLocations = () => async (dispatch, getState) => {
  let tempLocations = [];

  console.log(getState().devices.devices);

  for (let i = 0; i < getState().devices.devices.length; i++) {
    let id = getState().devices.devices[i].id.id;

    try {
      console.log("here");
      const response = await axios.get(
        "http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/" +
          id +
          "/values/timeseries",
        {
          headers: {
            "X-Authorization": "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(response.data);
      tempLocations.push(response.data);
    } catch (ex) {
      console.log("error occured while giving locations !");
    }
  }

  console.log("finish");
  dispatch(addLocation({ locations: tempLocations }));
};

const mapReducer = mapSlice.reducer;

export default mapReducer;
