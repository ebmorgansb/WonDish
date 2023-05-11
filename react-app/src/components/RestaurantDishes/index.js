import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function RestaurantDishes() {
  const dispatch = useDispatch()
  const primaryDishesAll = Object.values(useSelector(state => state.primaryReview))
  let { restaurantId } = useParams();
  let primaryDishes = primaryDishesAll.reduce(function(acc, current) {
    let match = acc.findIndex(dish => dish.name === current.name);
    if (match === -1) {
      acc.push(current);
    }
    return acc;
  }, []);
  let restName = primaryDishes[0]
  console.log(restName, 'ongod')
  //We have all the dishes once now. Now we need to filter by the restaurant id which will be passed from the
  //Primary restaurant page///
  let allRestDishes = primaryDishes.filter(dish => dish.restaurant_id == restaurantId)
  console.log(allRestDishes, 'LOL')
  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])

  if (!primaryDishes) {
    return null
  }

return (
<div className='tea'>
<div className='allRestDish'>
  <h2>{restName?.address}</h2>
    {primaryDishes.map((dish, index) =>
        <div className='rd'>
          <div className='restDishName'>{dish?.name.toUpperCase()[0]}{dish?.name.slice(1)}</div>
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
</div>
)

}