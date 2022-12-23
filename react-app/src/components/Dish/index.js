import {useDispatch, useSelector} from 'react-redux'
// import { getReviewsThunk } from '../../store/review'
// import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview'


export default function Dishes () {


  const dispatch = useDispatch()


  const primaryDishes = Object.values(useSelector(state => state.primaryReview))

  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])

  if (!primaryDishes) {
    return null
  }

return (
<div>
  {primaryDishes.map(
    primaryDish => (
      <div>
      {primaryDish.id}
      {primaryDish.name}
      {primaryDish.description}
      {primaryDish.image}
      {primaryDish.address}
      {primaryDish.rating}
      </div>
    )
  )}
</div>
)

}