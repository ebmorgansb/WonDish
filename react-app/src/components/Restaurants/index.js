import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Footer from '../Footer'
import { getAllRestaurantsThunk } from '../../store/restaurant'
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
import './index.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default function Restaurants() {
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const userId = user?.id

  const primaryDish = Object.values(useSelector(state => state.primaryReview))
  const restaurants = Object.values(useSelector(state => state.restaurant))
  console.log(primaryDish, 'hmm')
  console.log(restaurants, 'resty')

  // Function to get a random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


  useEffect(() => {
    dispatch(getAllRestaurantsThunk())
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])

  if (!primaryDish) {
    return null
  }


return (
    <div>
      <div className='totalRestTitle'>WonDish Restaurants</div>
        <div className='restaurantCards'>
            {restaurants.map(restaurant =>
            <>
            <NavLink className='restaurantCard1' style={{ textDecoration: 'none'}} to={`/restaurants/${restaurant?.id}`}>
            <div >
                <div className='restTitle'>{restaurant.name}</div>
                <div className='splitGoogDish'>
                  <img
                   src={getRandomElement(primaryDish.filter(dish => restaurant.id === dish.restaurant_id))?.image}
                   alt="image description for screen readers"
                   onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" }}
                   className='splitImg' ></img>
                <PlacesAutocomplete
  value={restaurant.address}
  // onChange={setAddress}
  // onSelect={handleSelect}

>
  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <div>
      {/* <input
        {...getInputProps({
          placeholder: 'Search Places ...',
          className: 'location-search-input',
        })}
      /> */}
      <div className="autocomplete-dropdown-container">
        {loading && <div>Loading...</div>}
        {suggestions.map(suggestion => {
          const className = suggestion.active
            ? 'suggestion-item--active'
            : 'suggestion-item';
          // inline style for demonstration purpose
          const style = suggestion.active
            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
            : { backgroundColor: '#ffffff', cursor: 'pointer' };
          return (
            <div
              {...getSuggestionItemProps(suggestion, {
                className,
                style,
              })}
            >
              <span>{suggestion.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  )}
</PlacesAutocomplete>
<iframe
className='restaurantMaps'
width="450"
height="250"
frameborder="0"
style={{border:0}}
referrerpolicy="no-referrer-when-downgrade"
src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDzNAUy0rhFEfpmMD7UvAShcRXzBnDh7aQ&q=${restaurant.address}}`}
allowfullscreen>
</iframe>
</div>
</div>
</NavLink>
</>

            )}

        </div>
    </div>
)

    }