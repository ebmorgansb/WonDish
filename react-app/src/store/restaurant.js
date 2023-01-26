const CREATERESTAURANT = 'restaurants/create'
const GETALLRESTAURANTS = 'restaurants/all'
const GETONERESTAURANT = 'restaurants/one'




/* ___________ Action Creators   ___________ */
export const getAllRestaurantsAction = (restaurants) => {
    return {
        type: GETALLRESTAURANTS,
        restaurants
    };
};


export const getOneRestaurantAction = (restaurant) => {
    return {
        type: GETONERESTAURANT,
        restaurant
    };
};

export const createRestaurantAction = (restaurant) => {
    return {
        type: CREATERESTAURANT,
        restaurant
    };
};



/* ___________ T H U N K S   ___________ */


// Create a Restaurant
export const createRestaurantThunk = (restaurant) => async (dispatch) => {
    const response = await fetch('/api/restaurants/create', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(restaurant)
    });
    if (response.ok) {
        const restaurant = await response.json();
        dispatch(createRestaurantAction(restaurant))
        return restaurant
    };
};

// Get restaurant
export const getOneRestaurantThunk = (restaurantId) => async (dispatch) => {
    const response = await fetch(`/api/restaurants/${restaurantId}`);
    if (response.ok) {
        const restaurant = await response.json();
        dispatch(getOneRestaurantAction(restaurant));
    };
};

// Get all restaurants
export const getAllRestaurantsThunk = () => async (dispatch) => {
    console.log('we in the get all restaurant?')
    const response = await fetch('/api/restaurants/all');
    if (response.ok) {
        const restaurants = await response.json();
        console.log('in restaurant tunk', restaurants)
        dispatch(getAllRestaurantsAction(restaurants));
    };
};




/* ___________ Restaurant Reducer   ___________ */

export default function restaurantsReducer(state = {}, action) {
    let newState = {};

    switch (action.type) {

        case GETALLRESTAURANTS:
            action.restaurants.forEach(restaurant => newState[restaurant.id] = restaurant)
            return newState

        case GETONERESTAURANT:
            // newState = { ...state }
            newState[action.restaurant.id] = action.restaurant
            return newState

        case CREATERESTAURANT:
            newState = { ...state }
            newState[action.restaurant.id] = action.restaurant
            return newState


        default:
            return state
    }
}