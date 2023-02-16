const CREATEPRIMARYREVIEW = 'primaryreviews/create'
const GETALLPRIMARYREVIEWS = 'primaryreviews/all'
const GETONEPRIMARYREVIEW = 'primaryreviews/one'
const UPDATEPRIMARYREVIEW = 'primaryreviews/update'
const DELETEPRIMARYREVIEW = 'primaryreviews/delete'
const CLEARPRIMARY = 'spot/clearPrimary'



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

export const clearPrimaryAction = () => {
    return {
      type: CLEARPRIMARY,
    };
  };
/* ___________ T H U N K S   ___________ */


// Create a Primary Review
export const createPrimaryReviewThunk = (primaryReview) => async (dispatch) => {
    console.log(primaryReview, 'gugugug')
    const response = await fetch('/api/primaryreviews/create', {
        method: 'POST',
        // headers: {'Content-Type':'application/json'},
        // body: JSON.stringify(primaryReview)
        body: primaryReview
    });
    if (response.ok) {
        console.log('make it here?')
        const primaryReview = await response.json();
        dispatch(createPrimaryReviewAction(primaryReview))
        return primaryReview
    };
};

// Get primary review
export const getOnePrimaryReviewThunk = (primaryReviewId) => async (dispatch) => {
    const response = await fetch(`/api/primaryreviews/${primaryReviewId}`);
    if (response.ok) {
        const primaryReview = await response.json();
        console.log('in da tunk===', primaryReview)
        dispatch(getOnePrimaryReviewAction(primaryReview));
    };
};

// Get all primary reviews
export const getAllPrimaryReviewsThunk = () => async (dispatch) => {
    console.log('we in the get all primary')
    const response = await fetch('/api/primaryreviews/all');
    if (response.ok) {
        const primaryReviews = await response.json();
        dispatch(getAllPrimaryReviewsAction(primaryReviews));
    };
};


// Update a primary review
export const editPrimaryReviewThunk = (primaryReview) => async (dispatch) => {
    const {id, description, category, rating} = primaryReview
    console.log('in the update', primaryReview)
    const response = await fetch(`/api/primaryreviews/edit/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            description,
            category,
            rating
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
    const response = await fetch(`/api/primaryreviews/delete/${primaryReviewId}`, { method: 'DELETE' });
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

        case GETONEPRIMARYREVIEW:
            // newState = { ...state }
            newState[action.primaryReview.id] = action.primaryReview
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
            // left side evaluates to an id, left of comma evaluates to the old primary review fields spread out, the right evaluates to the new primary review spread out
            //and overwrites fields with the same "key" aka field names with the new values from the new primary review.
            newState[action.primaryReview.id] = {...newState[action.primaryReview.id], ...action.primaryReview}
            return newState

        case CLEARPRIMARY:
            return newState

        default:
            return state
    }
}