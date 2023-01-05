import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { deletePrimaryReviewThunk, getOnePrimaryReviewThunk } from '../../store/primaryReview'
import { getAllSecondaryReviewsThunk } from '../../store/secondaryReview'
import EditDish from '../EditDish'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'
import EditSecondaryDish from '../EditSecondaryDish'
import { deleteSecondaryReviewThunk } from '../../store/secondaryReview'
import { Modal } from '../../context/modal'
import './index.css'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';
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
  <>
  <div className='totalOneDish'>
    <div className='primeDish'>
      {/* <div className='primeImage'> */}
        <img className='primeImage' src={primaryDish?.image}></img>
      {/* </div> */}
      <div className='primeInfoAndButtons'>
        <div className='primeInfo'>
          <h1>The Winning Dish</h1>
        <div>Dish: {primaryDish?.name}</div>
        <div>Description: {primaryDish?.description}</div>
        <div>Address: {primaryDish?.address}</div>
        <div>Rating: {primaryDish?.rating}</div>
        </div>
        { userId == primaryDish?.user_id &&
      <button className='oneDishButton' onClick={() => setShowModal(true)}>Edit your Dish</button>
        }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditDish setShowModal={setShowModal} />
        </Modal>
      )}
      {secondaryDishes.length == 0 &&
        <NavLink to={`/`}>
          <button className='oneDishButton' onClick={() => {
            dispatch(deletePrimaryReviewThunk(dishId))
          }
            }>Delete Review</button>
        </NavLink>
        }
      </div>
    </div>
    <div className='addReviewsAndTitle'>
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
              { userId == secondaryDish.user_id &&
              <button className='oneDishButton' onClick={() => setShowModal2(true)}>Edit your Dish</button>
            }
              {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <EditSecondaryDish secondaryDishId={secondaryDish.id} setShowModal2={setShowModal2} />
              </Modal>
              )}
              {userId == secondaryDish.user_id &&
              <button className='oneDishButton' onClick={() => {
                dispatch(deleteSecondaryReviewThunk(secondaryDish.id)) }}>Delete Review</button>
            }
              </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
    </>

)


}
