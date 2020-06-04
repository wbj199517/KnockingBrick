export const restaurants = (state=[], action) => {
    if(action && action.type === 'LOAD_RESTAURANTS'){
      return action.payload;
    }
    return state;
  }


export const restaurant = (state={}, action) => {
  if(action && action.type === 'SELECT_RESTAURANTS'){
    return action.payload;
  }
  return state;
}
export const keyword = (state='', action) => {
    if(action && action.type === 'LOAD_KEYWORD'){
      return action.payload;
    }
    return state;
  }