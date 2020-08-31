import axios from "axios";
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  const fetchData = async () => {
    try {
      const listResponse = await axios.get(`http://localhost:3333/smurfs`);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: listResponse.data });
    } catch (error) {
      dispatch({ type: FETCH_SMURF_FAIL });
    }
  };
  fetchData();
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF, payload: smurf });
};
