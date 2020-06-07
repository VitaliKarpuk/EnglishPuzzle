import { GET_WORDS } from '../constants/constants';

const getWords = (arrWords) => ({
  type: GET_WORDS,
  payload: arrWords,
});
export default getWords;
