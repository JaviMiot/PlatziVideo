export const actions = {
  SET_FAVORITE: 'SET_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  REGIRTER_REQUEST: 'REGIRTER_REQUEST',
  GET_VIDEO_SOURCE: 'GET_VIDEO_SOURCE',
};

export const setFavorite = (payload) => {
  return {
    type: actions.SET_FAVORITE,
    payload,
  };
};

export const deleteFavorite = (payload) => {
  return {
    type: actions.DELETE_FAVORITE,
    payload,
  };
};

export const loginRequest = (payload) => {
  return {
    type: actions.LOGIN_REQUEST,
    payload,
  };
};

export const logoutRequest = (payload) => {
  return {
    type: actions.LOGOUT_REQUEST,
    payload,
  };
};

export const registerRequest = (payload) => {
  return {
    type: actions.REGIRTER_REQUEST,
    payload,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: actions.GET_VIDEO_SOURCE,
    payload,
  };
};
