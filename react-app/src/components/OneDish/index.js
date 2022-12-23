import {useDispatch, useSelector} from 'react-redux'
// import { getReviewsThunk } from '../../store/review'
// import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { deletePrimaryReviewThunk, getOnePrimaryReviewThunk } from '../../store/primaryReview'
import EditDish from '../EditDish'
import { NavLink } from 'react-router-dom'

export default function OneDish () {

  let {dishId} = useParams()
  dishId = parseInt(dishId)
  const dispatch = useDispatch()

  const userId = useSelector(state => state.session.user.id)
  console.log('USERID', userId)
  const primaryDish = Object.values(useSelector(state => state.primaryReview))[0]
  console.log(primaryDish, 'wow')
  useEffect(() => {
    dispatch(getOnePrimaryReviewThunk(dishId))
  }, [dispatch, dishId])

  if (!primaryDish) {
    return null
  }

return (
<div>
      <div>
      {primaryDish.name}
      {primaryDish.description}
      <img className="smallImgs" src={primaryDish.image}></img>

      {primaryDish.address}
      {primaryDish.rating}
      </div>
      <EditDish/>
      {/* {userId === primaryDish.id && */}
        <div>
        {/* <NavLink to={`/`}> */}
        <button className='crudButton' onClick={()=> {dispatch(deletePrimaryReviewThunk(dishId))}}>Delete Review</button>
        {/* </NavLink> */}
        </div>
        {/* // } */}
</div>
)

}