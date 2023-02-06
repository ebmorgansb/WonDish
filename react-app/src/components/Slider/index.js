import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './index.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllPrimaryReviewsThunk } from '../../store/primaryReview';


export default function Slider() {
  const dispatch = useDispatch()
  const [currentIndex, setCurrentIndex] = useState(0);
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



  function handlePrevious() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
        setCurrentIndex(primaryDishes.length-1)
    }
  }

  function handleNext() {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === primaryDishes.length-1) {
        setCurrentIndex(0)
    }
  }

  if (!primaryDishes) {
    return null
  }

return (
    <>
    {primaryDishes[currentIndex]?.image &&
    <div className='allCar'>
      <button className='arrow-button-left' onClick={handlePrevious}></button>
      <NavLink to={`/dish/${primaryDishes[currentIndex]?.name}`}>
      <img
      className='sliderImages'
      src={primaryDishes[currentIndex]?.image}
      alt="image description for screen readers"
      onError={e => { e.currentTarget.src ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"; }}
    />
      </NavLink>
      <button className='arrow-button-right' onClick={handleNext}></button>
    </div>
}
    </>

)
}