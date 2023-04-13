import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  isLoged: false,
  modalRegister: false,
  modalLogin: false,
  authToken: '',
  userData: {},
  botonEnviar: false
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;