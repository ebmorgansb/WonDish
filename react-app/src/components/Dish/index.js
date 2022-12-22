import {useDispatch, useSelector} from 'react-redux'
import { getReviewsThunk } from '../../store/review'
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview'


export default function Dish () {


  const dispatch = useDispatch()


  const primaryDishes = Object.values(useSelector(state => state.primayReview))

  if (!primaryDishes) {
    return null
  }

  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])


return (
<div>TEST</div>
)

}