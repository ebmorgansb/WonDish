import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview';
import { NavLink } from 'react-router-dom';

export default function HomeDishes() {
  const dispatch = useDispatch()
  const primaryDishesAll = Object.values(useSelector(state => state.primaryReview))

  let primaryDishes = primaryDishesAll.reduce(function(acc, current) {
    let match = acc.findIndex(dish => dish.name === current.name);
    if (match === -1) {
      acc.push(current);
    }
    return acc;
  }, []);


  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])

  if (!primaryDishes) {
    return null
  }

return (
<div className='allHomeDish'>
    {primaryDishes.map((dish, index) =>
        <div className='re'>
        <NavLink to={`/dish/${dish?.name}`}>
            <img
            className='oneHomeDish'
            src={dish.image}
            alt="image description for screen readers"
            onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
            />
        </NavLink>
         </div>
    )}
</div>
)

}