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
  const primaryDishes = Object.values(useSelector(state => state.primaryReview))
  console.log(primaryDishes, 'in slider')

  useEffect(() => {
    dispatch(getAllPrimaryReviewsThunk())
  }, [dispatch])



  function handlePrevious() {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) {
        setCurrentIndex(3)
    }
  }

  function handleNext() {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === 3) {
        setCurrentIndex(0)
    }
  }

  if (!primaryDishes) {
    return null
  }

return (
    <>
    <div className='allCar'>
      <button className='arrow-button-left' onClick={handlePrevious}></button>
      <NavLink to={`/dish/${primaryDishes[currentIndex]?.id}`}>
      <img className='sliderImages' src={primaryDishes[currentIndex]?.image} alt="Slider image" />
      </NavLink>
      <button className='arrow-button-right' onClick={handleNext}></button>
    </div>
    </>

)
}