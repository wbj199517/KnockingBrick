
  export const loadRestaurants = payload => {
    return {
      type: 'LOAD_RESTAURANTS',
      payload
    }
  }
  

  export const selectRestaurant = payload => ({
    type: 'SELECT_RESTAURANTS',
    payload
  })
  export const loadKeyWord = payload => ({
    type: 'LOAD_KEYWORD',
    payload
  })
 