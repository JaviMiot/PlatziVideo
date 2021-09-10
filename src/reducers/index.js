import { actions } from '../actions';

const addElementNotRepeat = (list, elementToFind) => {
  if (!list.find((element) => element.id === elementToFind.id)) {
    return [...list, elementToFind];
  }
  return [...list];
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_FAVORITE:
      return {
        ...state,
        mylist: addElementNotRepeat(state.mylist, action.payload),
      };

    case actions.DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((items) => {
          return items.id !== action.payload;
        }),
      };

    case actions.LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case actions.REGIRTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case actions.GET_VIDEO_SOURCE:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;
