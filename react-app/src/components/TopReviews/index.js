import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { clearPrimaryAction, deletePrimaryReviewThunk, getOnePrimaryReviewThunk, getAllPrimaryReviewsThunk} from '../../store/primaryReview'
import EditDish from '../EditDish'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
import { useLocation } from 'react-router-dom'
// import './index.css'
// import { clearPrimaryAction } from '../../store/primaryReview'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

export default function TopReviews () {
const location = useLocation();
const data = location.state;
const {restaurantId} = useParams()
console.log(restaurantId, 'is it here buigweubo')
const history = useHistory()
const dispatch = useDispatch()
console.log('meowcats', data.dishName)
const [currDishName, setCurrDishName] = useState(data.dishName);
const topReviews = Object.values(useSelector(state => state.primaryReview))
console.log(topReviews, 'huh')

const topReviewsFilter = topReviews.filter((primaryDish) =>  primaryDish.name === currDishName && primaryDish.restaurant_id == restaurantId)
console.log(topReviewsFilter, 'lawl')



useEffect(() => {
  dispatch(getAllPrimaryReviewsThunk())

}, [dispatch])

if (!topReviews) {
  return null
}


return (
  <div>
    <h1>{topReviewsFilter[0].name} reviews at {topReviewsFilter[0].address.split(',')[0]}</h1>
    {topReviewsFilter.map(review =>
    <>
    <div>{review.description}</div>
    <img
    className='primeImage'
    src={review?.image}
    alt="image description for screen readers"
    onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
  />
    </>
    )}
</div>
    )

  }