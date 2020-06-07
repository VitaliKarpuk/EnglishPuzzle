import { CHANGE_PAGE } from '../constants/constants';

const changeLevel = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
export default changeLevel;
