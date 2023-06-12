export const setIsLoged = (payload) => ({
  type: "SET_ISLOGED",
  payload,
});

export const setAuthToken = (payload) => ({
  type: "SET_AUTHTOKEN",
  payload,
});

export const setUserData = (payload) => ({
  type: "SET_USERDATA",
  payload,
});

export const setCantCarrito = (payload) => ({
  type: "SET_CANTCARRITO",
  payload,
});

export const setCantCarritoAdd = () => ({
  type: "SET_ADDCARRITO",
});

export const setCantCarritoRem = () => ({
  type: "SET_REMOVECARRITO",
});
