export function fetchingActivities() {
    return {
      type: 'FETCHING_ACTIVITIES'
    }
  }
  
  export function fetchSuccess(activities) {
    return {
      type: 'FETCH_ACTIV_SUCCESS',
      activities
    }
  }
  
  export function fetchError(error) {
    return {
      type: 'FETCH_ACTIV_ERROR',
      error
    }
  }
  
  export function fetchActivities(cityId) {
        return dispatch => {
        dispatch(fetchingActivities());
        fetch(`/activities/${cityId}`)
            .then(response => response.json())
            .then(result => {dispatch(fetchSuccess(result))})
            .catch(e => 
                {console.log(e);
                dispatch(fetchError(e))}
            );
        };
  }