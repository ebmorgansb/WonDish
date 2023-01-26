import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Footer from '../Footer'
import { getAllRestaurantsThunk } from '../../store/restaurant'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
import './index.css'


export default function Restaurants() {
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  const userId = user?.id
  console.log('what is user',user)

//   const primaryDish = Object.values(useSelector(state => state.primaryReview))[0]
  const restaurants = Object.values(useSelector(state => state.restaurant))
  console.log(restaurants, 'hmm')



  useEffect(() => {
    dispatch(getAllRestaurantsThunk())

  }, [dispatch])

//   if (!primaryDish) {
//     return null
//   }


return (
    <div>
        <div>
            {restaurants.map(restaurant =>
                restaurant.name
            )}
        </div>
        <Footer/>
    </div>
)

    }