import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Footer from '../Footer'
import { getAllRestaurantsThunk } from '../../store/restaurant'
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
  console.log('what is user',user)

//   const primaryDish = Object.values(useSelector(state => state.primaryReview))[0]
  const restaurants = Object.values(useSelector(state => state.restaurant))
  console.log(restaurants, 'hmm')



  useEffect(() => {
    dispatch(getAllRestaurantsThunk())

  }, [dispatch])

//   if (!primaryDish) {
//     return null
//   }


return (
    <div>
      <div className='totalRestTitle'>WonDish Restaurants</div>
        <div className='restaurantCards'>
            {restaurants.map(restaurant =>
            <>
            <div className='restaurantCard'>
                <div className='restTitle'>{restaurant.name}</div>
                <div>
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
</>

            )}

        </div>
        {/* <Footer/> */}
    </div>
)

    }