import { SET_LAUNCHES, TOOGLE_FAVOURITE } from '../actions/rocketLaunchesActions';

const initialState = {
  launches: [],
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]')
}

export const rocketLaunchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAUNCHES:
      return {...state, launches : action.payload};
    case TOOGLE_FAVOURITE:
      let newState;
      if (state.favourites.includes(action.payload)) {
        newState = {...state, favourites: state.favourites.filter((id)=> id !== action.payload)}
      } else {
        newState = {...state, favourites: [...state.favourites, action.payload]}
      }
      localStorage.setItem('favourites', JSON.stringify(newState.favourites))
      return newState;
    default:
      return state;
  }
};
