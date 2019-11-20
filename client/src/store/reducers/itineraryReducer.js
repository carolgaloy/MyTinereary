const initialState = {
    payload: [],
    isFetching: false,
    error: {}
  };

export default function itineraryReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCHING_ITINERARIES':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_ITIN_SUCCESS':
            return {
                ...state,
                payload: action.itineraries,
                error: {},
                isFetching: false
            };
        case 'FETCH_ITIN_ERROR':
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}