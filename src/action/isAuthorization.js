import { AUTORIZATION } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const isAuthorization = (value) => ({
  type: AUTORIZATION,
  payload: value,
});
