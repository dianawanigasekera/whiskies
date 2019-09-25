export const FETCH_WHISKIES = 'FETCH_WHISKYS';
export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';

export const fetchWhiskies = () => ({
    type: FETCH_WHISKIES,
});

export const fetchWhiskiesSuccess = (whiskies:any) => ({
    type: FETCH_WHISKIES_SUCCESS,
    payload: whiskies
});

export const fetchWhiskiesFailure = (message:any) => ({
    type: FETCH_WHISKIES_FAILURE,
    payload: message
})