import { userAPI } from '../../api/api';

export const SET_LAUNCHES = 'SET_LAUNCHES';
export const TOOGLE_FAVOURITE = 'TOOGLE_FAVOURITE';

export const fetchLaunches = () => {
  return async (dispatch) => {
    const response = await userAPI.getUpcomingLaunches();
    dispatch({ type: SET_LAUNCHES, payload: response.data.results });
  };
};

export const toggleFavourite = (id) => {
  return { type: TOOGLE_FAVOURITE, payload: id };
};
