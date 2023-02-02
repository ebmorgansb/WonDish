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
import './index.css'
import { getAllUsersThunk } from '../../store/users'

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
const users = Object.values(useSelector(state => state.users))
console.log(users, 'lol')
const topReviewsFilter = topReviews.filter((primaryDish) =>  primaryDish.name === currDishName && primaryDish.restaurant_id == restaurantId)




useEffect(() => {
  dispatch(getAllPrimaryReviewsThunk())
  dispatch(getAllUsersThunk())

}, [dispatch])

if (!topReviews) {
  return null
}

if (!users) {
  return null
}


return (
  <div>
    <div className='topReviewTitle'>{topReviewsFilter[0]?.name[0].toUpperCase()+topReviewsFilter[0]?.name.slice(1)} reviews at {topReviewsFilter[0]?.address.split(',')[0]}</div>
    <div className='topReviewCards'>
    {topReviewsFilter.map(review =>
    <>
    <div className='topReviewCard'>
    <div>{users.find(user => user.id == review.user_id)?.username}</div>
    <img
    className='topReviewImg'
    src={review?.image}
    alt="image description for screen readers"
    onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
  />
  <div>{review.description}</div>
  </div>
    </>
    )}
    </div>
</div>
    )

  }