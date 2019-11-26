const initialState = {
    payload: [],
    isFetching: false,
    error: {}
  };

export default function itineraryReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCHING_ACTIVITIES':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_ACTIV_SUCCESS':
            return {
                ...state,
                payload: action.activities,
                error: {},
                isFetching: false
            };
        case 'FETCH_ACTIV_ERROR':
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}