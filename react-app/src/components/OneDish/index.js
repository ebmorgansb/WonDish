import {useDispatch, useSelector} from 'react-redux'
// import { getReviewsThunk } from '../../store/review'
// import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { deletePrimaryReviewThunk, getOnePrimaryReviewThunk } from '../../store/primaryReview'
import { getAllSecondaryReviewsThunk } from '../../store/secondaryReview'
import EditDish from '../EditDish'
import { NavLink } from 'react-router-dom'
import EditSecondaryDish from '../EditSecondaryDish'
import { deleteSecondaryReviewThunk } from '../../store/secondaryReview'

export default function OneDish () {

  let {dishId} = useParams()
  dishId = parseInt(dishId)
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const userId = user?.id
  const primaryDish = Object.values(useSelector(state => state.primaryReview))[0]
  const secondaryDishes = Object.values(useSelector(state => state.secondaryReview))
  // const secondaryDishes = secondState[0]


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
      <div>
      {primaryDish?.name}
      {primaryDish?.description}
      <img className="smallImgs" src={primaryDish?.image}></img>

      {primaryDish?.address}
      {primaryDish?.rating}
      </div>
      <EditDish/>
      {/* {userId === primaryDish.id && */}
        <div>
        {/* <NavLink to={`/`}> */}
        <button className='crudButton' onClick={()=> {dispatch(deletePrimaryReviewThunk(dishId))}}>Delete Review</button>
        {/* </NavLink> */}
        </div>
        {/* // } */}
        {/* <div className='allReviews'> */}
  <div>
    <h2>Additional Reviews</h2>
    {secondaryDishes.map(secondaryDish =>
    <div>
      <div>{secondaryDish.name}</div>
      <img src={secondaryDish.image}></img>
      <div>{secondaryDish.address}</div>
      <div>{secondaryDish.description}</div>
      <EditSecondaryDish/>
      <button className='crudButton' onClick={()=> {dispatch(deleteSecondaryReviewThunk(secondaryDish.id))}}>Delete Review</button>
    </div>
    )}
  </div>
</div>
)

}
