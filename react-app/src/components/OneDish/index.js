import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { deletePrimaryReviewThunk, getOnePrimaryReviewThunk } from '../../store/primaryReview'
import { getAllSecondaryReviewsThunk } from '../../store/secondaryReview'
import EditDish from '../EditDish'
import { NavLink } from 'react-router-dom'
import EditSecondaryDish from '../EditSecondaryDish'
import { deleteSecondaryReviewThunk } from '../../store/secondaryReview'
import { Modal } from '../../context/modal'
import './index.css'

export default function OneDish () {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  let {dishId} = useParams()
  dishId = parseInt(dishId)
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const userId = user?.id
  const primaryDish = Object.values(useSelector(state => state.primaryReview))[0]
  const secondaryDishes = Object.values(useSelector(state => state.secondaryReview))


  useEffect(() => {
    dispatch(getOnePrimaryReviewThunk(dishId))
    dispatch(getAllSecondaryReviewsThunk(dishId))
  }, [dispatch, dishId])

  if (!primaryDish) {
    return null
  }

  if (!secondaryDishes) {
    return null
  }

return (
  <div>
    <div className='primeDish'>
      <div className='primeImage'>
        <img src={primaryDish?.image}></img>
      </div>
      <div className='primeInfoAndButtons'>
        <div className='primeInfo'>
          <h1>The Winning Dish</h1>
        <div>Dish: {primaryDish?.name}</div>
        <div>Description: {primaryDish?.description}</div>
        <div>Address: {primaryDish?.address}</div>
        <div>Rating: {primaryDish?.rating}</div>
        </div>
      <button className='oneDishButton' onClick={() => setShowModal(true)}>Edit your Dish</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditDish setShowModal={setShowModal} />
        </Modal>
      )}
        <NavLink to={`/`}>
          <button className='oneDishButton' onClick={() => { dispatch(deletePrimaryReviewThunk(dishId)) }}>Delete Review</button>
        </NavLink>
      </div>
    </div>
    <h2 className='addReview'>Additional Reviews</h2>
    <div className='additionalReviews'>
      {secondaryDishes.map(secondaryDish =>
        <div className='secondaryDish'>
          <div className='secondDishDiv'><img className='secondDishImg' src={secondaryDish.image}></img></div>
          <div>
            <div className='secondReviewText'>
              <div>{secondaryDish.name}</div>
              <div>{secondaryDish.address}</div>
              <div>{secondaryDish.description}</div>
            </div>
            <div className='editAndDeleteSecond'>
              <button className='oneDishButton' onClick={() => setShowModal2(true)}>Edit your Dish</button>
              {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <EditSecondaryDish setShowModal2={setShowModal2} />
              </Modal>
              )}
              <button className='oneDishButton' onClick={() => { dispatch(deleteSecondaryReviewThunk(secondaryDish.id)) }}>Delete Review</button>
              </div>
          </div>
        </div>
      )}
    </div>

  </div>
)

}
