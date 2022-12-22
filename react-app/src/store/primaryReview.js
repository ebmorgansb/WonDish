const CREATEPRIMARYREVIEW = 'primaryreviews/create'
const GETALLPRIMARYREVIEWS = 'primaryreviews/all'
const GETONEPRIMARYREVIEW = 'primaryreviews/one'
const UPDATEPRIMARYREVIEW = 'primaryreviews/update'
const DELETEPRIMARYREVIEW = 'primaryreviews/delete'


/* ___________ Action Creators   ___________ */
export const getAllPrimaryReviewsAction = (primaryReviews) => {
    return {
        type: GETALLPRIMARYREVIEWS,
        primaryReviews
    };
};


export const getOnePrimaryReviewAction = (primaryReview) => {
    return {
        type: GETONEPRIMARYREVIEW,
        primaryReview
    };
};

export const createPrimaryReviewAction = (primaryReview) => {
    return {
        type: CREATEPRIMARYREVIEW,
        primaryReview
    };
};

export const deletePrimaryReviewAction = (primaryReviewId) => {
    return {
        type: DELETEPRIMARYREVIEW,
        primaryReviewId
    };
};

export const updatePrimaryReviewAction = (primaryReview) => {
    return {
        type: UPDATEPRIMARYREVIEW,
        primaryReview
    };
};

/* ___________ T H U N K S   ___________ */


// Create a Primary Review
export const createPrimaryReviewThunk = (primaryReview) => async (dispatch) => {
    const response = await fetch('/api/primaryreviews/create', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(primaryReview)
    });
    if (response.ok) {
        const primaryReview = await response.json();
        dispatch(createPrimaryReviewAction(primaryReview))
        return primaryReview
    };
};

// Get all primary reviews
export const getAllPrimaryReviewsThunk = () => async (dispatch) => {
    const response = await fetch('/api/primaryreviews/all');
    if (response.ok) {
        const primaryReviews = await response.json();
        dispatch(getAllPrimaryReviewsAction(primaryReviews));
    };
};


// Update a primary review
export const editPrimaryReviewThunk = (primaryReview) => async (dispatch) => {
    const {id, name, description, category, image, address, rating, user_id} = primaryReview
    const response = await fetch(`/api/primaryreviews/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name,
            description,
            category,
            image,
            address,
            rating,
            user_id
        })
    });

    if (response.ok) {
        const editedPrimaryReview = await response.json();
        dispatch(updatePrimaryReviewAction(editedPrimaryReview));
        return editedPrimaryReview;
    };
};

// Delete a primary review
export const deletePrimaryReviewThunk = (primaryReviewId) => async (dispatch) => {
    const response = await fetch(`/api/primaryreviews/${primaryReviewId}`, { method: 'DELETE' });
    if (response.ok) {
        dispatch(deletePrimaryReviewAction(primaryReviewId))
    }
};

/* ___________ Primary Review Reducer   ___________ */

export default function primaryReviewsReducer(state = {}, action) {
    let newState = {};

    switch (action.type) {

        case GETALLPRIMARYREVIEWS:
            action.primaryReviews.forEach(primaryReview => newState[primaryReview.id] = primaryReview)
            return newState

        case DELETEPRIMARYREVIEW:
            newState = { ...state }
            delete newState[action.primaryReviewId]
            return newState

        case CREATEPRIMARYREVIEW:
            newState = { ...state }
            newState[action.primaryReview.id] = action.primaryReview
            return newState

        case UPDATEPRIMARYREVIEW:
            newState = {...state}
            newState[action.primaryReview.id] = {...newState[action.primaryReview.id], ...action.primaryReview}
            return newState

        default:
            return state
    }
}