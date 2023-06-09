import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  isLoged: false,
  authToken: "",
  admin: false,
  userData: {},
  cantCarrito: 0,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
