export function fetchingCities() {
    return {
      type: 'FETCHING_CITIES'
    }
  }
  
  export function fetchSuccess(cities) {
    return {
      type: 'FETCH_SUCCESS',
      cities
    }
  }
  
  export function fetchError(error) {
    return {
      type: 'FETCH_ERROR',
      error
    }
  }
  
  export function fetchAllCities() {
    return dispatch => {
      dispatch(fetchingCities());
      fetch('/cities/all')
              .then(response => response.json())
              .then(result => {dispatch(fetchSuccess(result))})
              .catch(e => 
                {console.log(e);
                dispatch(fetchError(e))}
              );
    };
  }