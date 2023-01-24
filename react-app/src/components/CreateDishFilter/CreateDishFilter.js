import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllPrimaryReviewsThunk } from "../../store/primaryReview"
import { Modal } from "../../context/modal"
import './index.css'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default function CreateDishFilter() {
    const sessUser = useSelector(state => state.session.user)
    const primaryDishes = Object.values(useSelector(state => state.primaryReview))
    const restaurants = Object.values(useSelector(state => state.restaurant))
    console.log(primaryDishes, 'hey there jack cool guy')
    const primaryDishNames = []
    const primaryDishAddresses = []
    const restaurantNames = []
    const history = useHistory()
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const [ address, setAddress ] = useState('');
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


    // for (let i = 0; i < primaryDishes.length-1; i++) {
      primaryDishes.forEach(primaryDish => {
        let primaryDishName = primaryDish.name.split(" ").join("")
        primaryDishNames.push(primaryDishName.toLowerCase())
})

      restaurants.forEach(restauarant => {
        let restaurantName = restaurant.name
        restaurantNames.push(restaurantName)
})



    useEffect(()=>{
      const errors = []
      if(!sessUser) errors.push("Must be logged in to create a review");
      if(name.length > 19) errors.push("Name must be less than 20 characters");
      if(!name) errors.push("Dish Name is required");

      getAllPrimaryReviewsThunk()
      setErrors(errors)
    },[name, sessUser])


    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            name,
            address,
            user_id: sessUser.id
        };

        //   if (primaryDishNames.includes(name.split(" ").join("").toLowerCase())) {
        //   let idx = primaryDishNames.indexOf(name.split(" ").join("").toLowerCase())
        //   let primaryReviewId = primaryDishes[idx].id
        //   history.push(`/secondarydish/create`, {name, primaryReviewId})
        // }
        if (restaurants.includes(name.split(" ").join("").toLowerCase()))
          history.push(`/primarydish/create`, {name, address})



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
          {/* <div>Address</div> */}
        <input className="actualInput"
          type="text"
          value={address}
          hidden
          // onChange={(e) => setAddress(e.target.value)}
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
        <div className="instruct">All reviews belonging to the same dish will be grouped together*</div>
      </form>
    </>
    )
}