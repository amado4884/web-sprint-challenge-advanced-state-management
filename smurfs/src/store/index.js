import { createStore, applyMiddleware } from "redux";
import { smurfReducer } from "../reducers/smurfReducer";
import thunk from "redux-thunk";

export default createStore(smurfReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)));
