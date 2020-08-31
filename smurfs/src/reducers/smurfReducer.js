import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF } from "../actions";
const initalState = {
  loading: false,
  list: [],
};

export const smurfReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SMURF_START:
      return { ...state, loading: true };
    case FETCH_SMURF_SUCCESS:
    case FETCH_SMURF_FAIL:
      return { ...state, loading: false, list: payload };
    case ADD_SMURF:
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
};
