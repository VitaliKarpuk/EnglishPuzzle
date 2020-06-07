import { CHANGE_LEVEL } from '../constants/constants';

const changeLevel = (level) => ({
  type: CHANGE_LEVEL,
  payload: level,
});
export default changeLevel;
