export function fetchingItineraries() {
    return {
      type: 'FETCHING_ITINERARIES'
    }
  }
  
  export function fetchSuccess(itineraries) {
    return {
      type: 'FETCH_ITIN_SUCCESS',
      itineraries
    }
  }
  
  export function fetchError(error) {
    return {
      type: 'FETCH_ITIN_ERROR',
      error
    }
  }
  
  export function fetchItineraries(cityId) {
    return dispatch => {
      dispatch(fetchingItineraries());
      fetch(`/itineraries/${cityId}`)
              .then(response => response.json())
              .then(result => {dispatch(fetchSuccess(result))})
              .catch(e => 
                {console.log(e);
                dispatch(fetchError(e))}
              );
    };
  }