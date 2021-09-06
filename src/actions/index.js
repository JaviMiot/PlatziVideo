export const actions = {
  SET_FAVORITE: 'SET_FAVORITE',
  DELETE_FAVORITE: 'DELETE_FAVORITE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
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
