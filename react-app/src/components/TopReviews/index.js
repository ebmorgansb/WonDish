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
const history = useHistory()
const dispatch = useDispatch()
const user = useSelector(state => state.session.user)
const userId = user?.id
const [showModal, setShowModal] = useState(false);
const [showModal2, setShowModal2] = useState(false);
const [showModal3, setShowModal3] = useState(false);
const [currId, setCurrId] = useState('')
const [currDishName, setCurrDishName] = useState(data.name);
const topReviews = Object.values(useSelector(state => state.primaryReview))
const users = Object.values(useSelector(state => state.users))
const topReviewsFilter = topReviews.filter((primaryDish) =>  primaryDish.name === currDishName && primaryDish.restaurant_id == restaurantId)
console.log(currDishName,    'current dish name')



useEffect(() => {
  dispatch(getAllPrimaryReviewsThunk())
  dispatch(getAllUsersThunk())

}, [dispatch, restaurantId])

if (!topReviews) {
  return null
}

if (!users) {
  return null
}


return (
  <div className='totalTopReviews'>
    {topReviewsFilter[0]?.name &&
    <div className='topReviewTitle'>{topReviewsFilter[0]?.name[0].toUpperCase()+topReviewsFilter[0]?.name.slice(1)} reviews at {topReviewsFilter[0]?.address.split(',')[0]}</div>
}
    <div className='topReviewCards'>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <EditDish dishId={currId} setShowModal={setShowModal} />
      </Modal>
    )}
        {showModal2 && (
      <Modal onClose={() => setShowModal2(false)}>
        <div className='deleteModal'>
          <div>Are you sure you want to delete your review?</div>
          <NavLink style={{ textDecoration: 'none' }}  to={`/`}>
        <button className='topReviewButtonModal' onClick={() => {
          dispatch(deletePrimaryReviewThunk(currId))
        }
          }>Delete</button>
      </NavLink>
        </div>
      </Modal>
    )}
    {topReviewsFilter.map(review =>
    <>
    <div className='topReviewCard'>
    <div>{users.find(user => user?.id == review.user_id)?.username}</div>
    <img
    className='topReviewImg'
    src={review?.image}
    alt="image description for screen readers"
    onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
  />
  <div>Rating: {review.rating}</div>
  <div className='topReviewText'>{review.description}</div>
  <div className='topReviewButtons'>
  {user != null && userId == review?.user_id &&
    <button className='topReviewButton' onClick={() => {
    setShowModal(true)
    setCurrId(review.id)
    }
    }>
      Edit</button>
      }

    {/* {userId == review?.user_id &&
          <NavLink style={{ textDecoration: 'none' }}  to={`/`}>

        <button className='topReviewButton' onClick={() => {
          dispatch(deletePrimaryReviewThunk(review?.id))
        }
          }>Delete</button>
      </NavLink>
      } */}
          {userId == review?.user_id &&
        <button className='topReviewButton' onClick={() => {
          setShowModal2(true)
          setCurrId(review.id)
          // dispatch(deletePrimaryReviewThunk(review?.id))
        }
          }>Delete</button>
      }
      </div>
  </div>
    </>
    )}
    </div>
</div>
    )



  }