const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ISLOGED":
      return {
        ...state,
        isLoged: payload,
      };
    case "SET_AUTHTOKEN":
      return {
        ...state,
        authToken: payload,
      };
      case "SET_ADMIN":
        return {
          ...state,
          admin: payload,
        };

    case "SET_USERDATA":
      return {
        ...state,
        userData: payload,
      };

    case "SET_CANTCARRITO":
      return {
        ...state,
        cantCarrito: payload,
      };

    case "SET_ADDCARRITO":
      const updatedCantCarritoAdd = state.cantCarrito + 1;
      return {
        ...state,
        cantCarrito: updatedCantCarritoAdd,
      };

    case "SET_REMOVECARRITO":
      const updatedCantCarritoRem = state.cantCarrito - 1;
      return {
        ...state,
        cantCarrito: updatedCantCarritoRem,
      };

    default:
      return state;
  }
};

export default reducer;
