export const FETCH_POSTS = 'FETCH_WHISKYS';
export const FETCH_POSTS_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_WHISKYS_FAILURE';

export const fetchPosts = () => ({
    type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsFailure = (message) => ({
    type: FETCH_POSTS_FAILURE,
    payload: message
});