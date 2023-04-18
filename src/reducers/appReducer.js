import TYPES from "./types";

const appInitialState = {
    post: [],
    isFetching: false
}


const appReducer = (state, action) => {
    switch (action.type) {

        case TYPES.FETCHING:
            return { ...state, isFetching: true }
        default:
            return state;
    }
}

export { appInitialState, appReducer }