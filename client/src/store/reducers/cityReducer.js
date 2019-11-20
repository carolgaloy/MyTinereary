const initialState = {
    payload: [],
    isFetching: false,
    error: {}
  };

export default function cityReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCHING_CITIES':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                payload: action.cities,
                error: {},
                isFetching: false
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}