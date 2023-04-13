const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'SET_ISLOGED':
        return {
          ...state,
          isLoged: payload
        };
      case 'SET_MODALLOGIN':
        return {
          ...state,
          modalLogin: payload
        };
      case 'SET_MODALREGISTER':
        return {
          ...state,
          modalRegister: payload
        };
  
      case 'SET_AUTHTOKEN':
        return {
          ...state,
          authToken: payload
        };
  
      case 'SET_USERDATA':
        return {
          ...state,
          userData: payload
        };
  
      case 'SET_BOTONENVIAR':
        return {
          ...state,
          botonEnviar: payload
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  