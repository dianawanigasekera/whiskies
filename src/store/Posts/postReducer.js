
import {FETCH_POSTS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from "./postsAction";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_POSTS_SUCCESS:
            return {
                posts: [...action.payload],
                isLoading: false,
                error: null
            };
        case FETCH_POSTS_FAILURE:
            return {
                posts: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}