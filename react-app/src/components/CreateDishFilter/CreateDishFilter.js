import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import { getAllRestaurantsThunk } from "../../store/restaurant"
import { createRestaurantThunk } from "../../store/restaurant"
import { Modal } from "../../context/modal"
import './index.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default function CreateDishFilter() {
    const dispatch = useDispatch()
    const sessUser = useSelector(state => state.session.user)
    const primaryDishes = Object.values(useSelector(state => state.primaryReview))
    const restaurants = Object.values(useSelector(state => state.restaurant))
    const primaryDishNames = []
    const primaryDishAddresses = []
    const restaurantNames = []
    const restaurantAddresses = []
    const history = useHistory()
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat:null,
        lng: null
    })

    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const ll = await getLatLng(results[0])
        setAddress(value)
        setCoordinates(ll)
    }


      primaryDishes.forEach(primaryDish => {
        let primaryDishName = primaryDish.name.split(" ").join("")
        primaryDishNames.push(primaryDishName.toLowerCase())
      })

      restaurants.forEach(restaurant => {
        let restaurantName = restaurant.name
        restaurantNames.push(restaurantName)
      })

      restaurants.forEach(restaurant => {
        let restaurantAddress = restaurant.address
        restaurantAddresses.push(restaurantAddress)
      })



    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to create a review");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      if(!name) errors.push("Dish Name is required");
      if(!address) errors.push("Address is required")

      dispatch(getAllPrimaryReviewsThunk())
      dispatch(getAllRestaurantsThunk())
      setErrors(errors)
    },[name, address, sessUser])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const restData = {
          name: address.split(',')[0],
          address,
          user_id: sessUser.id
        }

        if (restaurantAddresses.includes(address)) {
          let idx = restaurantAddresses.indexOf(address)
          let restaurantId = restaurants[idx].id
          history.push(`/primarydish/create`, {name, address, restaurantId})
        }
        else {
          dispatch(createRestaurantThunk(restData))
            let restaurantId = restaurants[restaurants.length-1].id +1
          history.push(`/primarydish/create`, {name, address, restaurantId})
        }
      }


    return (
      <>
     <form className="createFilterForm" onSubmit={handleSubmit}>
     <h1 className="title">Create a review for a dish</h1>
     <div className="errors">
  {errors.map((error) => (
        <div className="oneError" key={`a${error}`}> {error}</div>))}
      </div>
      <div className="formInputs">
      <div className="oneFormInput">
        <div className="formPadding">
          <div>Dish Name</div>
        <input className="actualInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
      </div>
      <div className="oneFormInput">
        <div className="formPadding">
        <input className="actualInput"
          type="text"
          value={address}
          hidden
          required
        />
        </div>
      </div>
    </div>


    <p>Address: {address}</p>

<PlacesAutocomplete
  value={address}
  onChange={setAddress}
  onSelect={handleSelect}

>
  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    <div>
      <input
        {...getInputProps({
          placeholder: 'Search Places ...',
          className: 'location-search-input',
        })}
      />
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
width="450"
height="250"
frameborder="0"
style={{border:0}}
referrerpolicy="no-referrer-when-downgrade"
src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDzNAUy0rhFEfpmMD7UvAShcRXzBnDh7aQ&q=near+${coordinates.lat || 34.411953},+${coordinates.lng || -119.697159}`}
allowfullscreen>
</iframe>

        <button className="button" disabled={errors.length > 0} type='submit'>Submit</button>
      </form>
    </>
    )
}