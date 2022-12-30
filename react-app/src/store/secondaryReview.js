const CREATESECONDARYREVIEW = 'secondaryreviews/create'
const GETALLSECONDARYREVIEWS = 'secondaryreviews/all'
const GETONESECONDARYREVIEW = 'secondaryreviews/one'
const UPDATESECONDARYREVIEW = 'secondaryreviews/update'
const DELETESECONDARYREVIEW = 'secondaryreviews/delete'


/* ___________ Action Creators   ___________ */
export const getAllSecondaryReviewsAction = (secondaryReviews) => {
    return {
        type: GETALLSECONDARYREVIEWS,
        secondaryReviews
    };
};


export const getOneSecondaryReviewAction = (secondaryReview) => {
    return {
        type: GETONESECONDARYREVIEW,
        secondaryReview
    };
};

export const createSecondaryReviewAction = (secondaryReview) => {
    return {
        type: CREATESECONDARYREVIEW,
        secondaryReview
    };
};

export const deleteSecondaryReviewAction = (secondaryReviewId) => {
    return {
        type: DELETESECONDARYREVIEW,
        secondaryReviewId
    };
};

export const updateSecondaryReviewAction = (secondaryReview) => {
    return {
        type: UPDATESECONDARYREVIEW,
        secondaryReview
    };
};

/* ___________ T H U N K S   ___________ */


// Create a Secondary Review
export const createSecondaryReviewThunk = (secondaryReview, primaryreview_id) => async (dispatch) => {
    const response = await fetch(`/api/secondayreviews/create/assocprime/${primaryreview_id}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(secondaryReview)
    });
    if (response.ok) {
        const secondaryReview = await response.json();
        dispatch(createSecondaryReviewAction(secondaryReview))
        return secondaryReview
    };
};

// Get secondary review
export const getOneSecondaryReviewThunk = (secondaryReviewId) => async (dispatch) => {
    const response = await fetch(`/api/secondaryreviews/${secondaryReviewId}`);
    if (response.ok) {
        const secondaryReview = await response.json();
        dispatch(getOneSecondaryReviewAction(secondaryReview));
    };
};

// Get all secondary reviews associated with a primary id
export const getAllSecondaryReviewsThunk = (primaryReviewId) => async (dispatch) => {
    const response = await fetch(`/api/secondaryreviews/assocprime/${primaryReviewId}`);
    if (response.ok) {
        const secondaryReviews = await response.json();
        console.log('secondaryReview TINK', secondaryReviews)
        dispatch(getAllSecondaryReviewsAction(secondaryReviews));
    };
};


// Update a secondary review
export const editPrimaryReviewThunk = (secondaryReview) => async (dispatch) => {
    const {id, description, category, rating} = secondaryReview
    // console.log('in the update', primaryReview)
    const response = await fetch(`/api/secondaryreviews/edit/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            description,
            category,
            rating
        })
    });

    if (response.ok) {
        const editedSecondaryReview = await response.json();
        dispatch(updateSecondaryReviewAction(editedSecondaryReview));
        return editedSecondaryReview;
    };
};

// Delete a secondary review
export const deleteSecondaryReviewThunk = (secondaryReviewId) => async (dispatch) => {
    const response = await fetch(`/api/secondaryreviews/delete/${secondaryReviewId}`, { method: 'DELETE' });
    if (response.ok) {
        dispatch(deleteSecondaryReviewAction(secondaryReviewId))
    }
};

/* ___________ Primary Review Reducer   ___________ */

export default function secondaryReviewsReducer(state = {}, action) {
    let newState = {};

    switch (action.type) {

        case GETALLSECONDARYREVIEWS:
            action.secondaryReviews.forEach(secondaryReview => newState[secondaryReview.id] = secondaryReview)
            return newState

        // case GETONESECONDARYREVIEW:
        //     // newState = { ...state }
        //     newState[action.primaryReview.id] = action.primaryReview
        //     return newState

        case DELETESECONDARYREVIEW:
            newState = { ...state }
            delete newState[action.secondaryReviewId]
            return newState

        case CREATESECONDARYREVIEW:
            newState = { ...state }
            newState[action.secondaryReview.id] = action.secondaryReview
            return newState


        case UPDATESECONDARYREVIEW:
            newState = {...state}
            // left side evaluates to an id, left of comma evaluates to the old primary review fields spread out, the right evaluates to the new primary review spread out
            //and overwrites fields with the same "key" aka field names with the new values from the new primary review.
            newState[action.secondaryReview.id] = {...newState[action.secondaryReview.id], ...action.secondaryReview}
            return newState

        default:
            return state
    }
}