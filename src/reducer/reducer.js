import { AUTORIZATION, CHANGE_LEVEL, CHANGE_PAGE, GET_WORDS } from '../constants/constants';

const initilState = {
  autorization: false,
  level: +localStorage.getItem('level') || 0,
  page: +localStorage.getItem('page') || 0,
  arrWords: null,
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case AUTORIZATION:
      return {
        ...state,
        autorization: action.payload,
      };
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case GET_WORDS:
      return {
        ...state,
        arrWords: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
