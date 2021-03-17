import { combineReducers } from 'redux';
import { rocketLaunchesReducer } from './rocketLaunchesReducer';

export const mainReducer = combineReducers({
  launches: rocketLaunchesReducer,
});
