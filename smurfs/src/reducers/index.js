import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case POST_SMURF_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}