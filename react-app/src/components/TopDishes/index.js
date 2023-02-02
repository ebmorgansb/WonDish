import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { clearPrimaryAction, deletePrimaryReviewThunk, getOnePrimaryReviewThunk, getAllPrimaryReviewsThunk} from '../../store/primaryReview'
import EditDish from '../EditDish'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
// import './index.css'
// import { clearPrimaryAction } from '../../store/primaryReview'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';



export default function TopDishes () {
const [showModal, setShowModal] = useState(false);
const [showModal2, setShowModal2] = useState(false);
const [Description, setDescription] = useState();
let dishName = useParams()
dishName = Object.values(dishName)
const history = useHistory()
const dispatch = useDispatch()
const user = useSelector(state => state.session.user)
const userId = user?.id
const primaryDishObj = {}
const primaryDishes = Object.values(useSelector(state => state.primaryReview))
const specificDishes = primaryDishes.filter(primaryDish => primaryDish.name == dishName[0])
const dishArrayTitles = ['The Winning Dish', "Almost Won", 'Still Winning']
specificDishes.forEach(specificDish => {
  let key = specificDish.address
  let newRating = specificDish.rating
  if (!primaryDishObj[key]) {
    let ratingArr = [newRating]
    specificDish.rating = ratingArr
    primaryDishObj[key] = specificDish
  }
  else {
    primaryDishObj[key].rating.push(newRating)
  }
})
let finalArr = Object.values(primaryDishObj)
finalArr.forEach(dish => {
  let testArr = dish.rating
  let total = testArr.reduce((a,b)=>a+b)
  dish.rating = total
})
let sortedDishes = finalArr.sort((a, b) => b.rating - a.rating).slice(0,3)



useEffect(() => {
  dispatch(getAllPrimaryReviewsThunk())

}, [dispatch])


if (!sortedDishes) {
  return null
}

return (
<div className='totalOneDish'>
{sortedDishes.map((dish, index) =>
  <div className='primeDish'>
  <img
    className='primeImage'
    src={dish?.image}
    alt="image description for screen readers"
    onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
  />
    <div className='primeInfoAndButtons'>
      <div className='primeInfo'>
        <h1 className='oneDishTitle'>{dishArrayTitles[index]}</h1>
      <h2 className='oneDishTitle'>{dish?.name.charAt(0).toUpperCase() + dish.name.slice(1)}</h2>
      <div className='primeText'>Description: {dish?.description}</div>
      <div className='primeText'>Address: {dish?.address}</div>






      <PlacesAutocomplete
  value={dish.address}
  // onChange={setAddress}
  // onSelect={handleSelect}

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
src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDzNAUy0rhFEfpmMD7UvAShcRXzBnDh7aQ&q=${dish.address}}`}
allowfullscreen>
</iframe>






      <div className='primeText'>Rating: {dish?.rating}</div>
      </div>
      {user != null && userId == dish?.user_id &&
    <button className='oneDishButton' onClick={() => setShowModal(true)}>Edit your Dish</button>
      }
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditDish setShowModal={setShowModal} />
      </Modal>
    )}
    {userId == dish?.user_id &&
      <NavLink to={`/`}>
        <button className='oneDishButton' onClick={() => {
          dispatch(deletePrimaryReviewThunk(dish.id))
        }
          }>Delete Review</button>
      </NavLink>
      }
      <button className='oneDishButton' onClick={() => {
          let dishName = dish.name
          console.log(dishName, 'hm')
          history.push(`/dish/reviews/${dish.restaurant_id}`, {dishName})
        }
          }>See all Reviews</button>
    </div>
  </div>
)}
</div>

    )}
