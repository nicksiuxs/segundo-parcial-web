import TYPES from "./types";

const appInitialState = {
    posts: [],
    isFetching: false
}

const appReducer = (state, action) => {
    switch (action.type) {
        case TYPES.FETCHING:
            return { ...state, isFetching: true };
        case TYPES.ADD_DATA:
            return { posts: action.payload, isFetching: false }
        default:
            return state;
    }
}

export { appInitialState, appReducer }