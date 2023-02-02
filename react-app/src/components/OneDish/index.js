import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { clearPrimaryAction, deletePrimaryReviewThunk, getOnePrimaryReviewThunk, getAllPrimaryReviewsThunk} from '../../store/primaryReview'
import EditDish from '../EditDish'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
import './index.css'
// import { clearPrimaryAction } from '../../store/primaryReview'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

export default function OneDish () {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [ spinner, setSpinner ] = useState(true);
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
  // console.log(specificDishes, 'specificDishes')
  specificDishes.forEach(specificDish => {
    let key = specificDish.address
    let newRating = specificDish.rating
    // console.log(newRating, 'before if')
    if (!primaryDishObj[key]) {
      let ratingArr = [newRating]
      specificDish.rating = ratingArr
      primaryDishObj[key] = specificDish
      // console.log(primaryDishObj, 'ooowowowowowTEST')

    }
    else {
      console.log('hmm')
      // Can I not reference the old specificDish.address since I am within this forEach with the specificDish being looped through
      primaryDishObj[key].rating.push(newRating)
      // Key in the big object is the address of the restaurant, then the value equals specific dish, this is supposedly to only alter
      // the rating of the previously assigned specific dish. But is this referencing the new specificDish being looped through?
    }
  })
  // console.log(primaryDishObj, 'real object')
  // let finalArr = Object.values(primaryDishObj).sort(rating).slice(0,2)
  let finalArr = Object.values(primaryDishObj)
  finalArr.forEach(dish => {
    let testArr = dish.rating
    let total = testArr.reduce((a,b)=>a+b)
    dish.rating = total
  })
  let sortedDishes = finalArr.sort((a, b) => b.rating - a.rating).slice(0,3)
  console.log(sortedDishes, 'sortedDishes')
  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 100)
  // }, []);



  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())

  }, [dispatch])

  // if (!primaryDish) {
  //   return null
  // }

  // if (!secondaryDishes) {
  //   return null
  // }

return (
  <>
  <h2>{dishName}</h2>

  {/* {!spinner &&
  } */}
  <div className='totalOneDish'>
  {sortedDishes.map(dish =>
    <div className='primeDish'>
    <img
      className='primeImage'
      src={dish?.image}
      alt="image description for screen readers"
      onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
    />
      <div className='primeInfoAndButtons'>
        <div className='primeInfo'>
          <h1 className='oneDishTitle'>The Winning Dish:</h1>
        <h2 className='oneDishTitle'>{dish?.name.charAt(0).toUpperCase() + dish.name.slice(1)}</h2>
        <div className='primeText'>Description: {dish?.description}</div>
        <div className='primeText'>Address: {dish?.address}</div>
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
      </div>
    </div>
)}
  </div>
<Footer/>
    </>

)


}