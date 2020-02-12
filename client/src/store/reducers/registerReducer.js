const initialState = {
    payload: [],
    isFetching: false,
    error: {}
  };

export default function itineraryReducer(state = initialState, action) {
    switch(action.type) {
        case 'SENDING_USER':
            return {
                ...state,
                isFetching: true
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                payload: action.user,
                error: {},
                isFetching: false
            };
        case 'REGISTER_ERROR':
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}