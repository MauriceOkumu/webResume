import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/actions.js';


export default function LikeCurrentReducer(state=8, action) {
  const current = state;
  switch(action.type){
    case INCREASE_COUNT:
      return current + 1;
    case DECREASE_COUNT:
      return current - 1;
    default:
      return state;
  }
}
