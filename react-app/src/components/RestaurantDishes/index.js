import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CreateADishModal from '../CreateDishFilter/CreateDishFilterModal';

export default function RestaurantDishes() {
  const dispatch = useDispatch()
  let { restaurantId } = useParams();
  const primaryDishesAll = Object.values(useSelector(state => state.primaryReview))
  let allRestDishes = primaryDishesAll.filter(dish => dish.restaurant_id == restaurantId)
  console.log(restaurantId, 'hmm')
  let primaryDishes = allRestDishes.reduce(function(acc, current) {
    let match = acc.findIndex(dish => dish.name === current.name);
    if (match === -1) {
      acc.push(current);
    }
    return acc;
  }, []);
  let restName = primaryDishes[0]?.address.split(',')[0]
  console.log(primaryDishes, 'ongod')
  //We have all the dishes once now. Now we need to filter by the restaurant id which will be passed from the
  //Primary restaurant page///////
  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])

  if (!primaryDishes) {
    return null
  }

return (
<div className='tea'>
<h2 className='restDishAdd'>The Menu at {restName}</h2>
<div className='allRestDish'>
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
<div className='extraCreate'>
<h2 className='restDishAdd2'>Help us make the menu complete!</h2>
<CreateADishModal/>
</div>
</div>
)

}