import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { clearPrimaryAction, deletePrimaryReviewThunk, getOnePrimaryReviewThunk, getAllPrimaryReviewsThunk} from '../../store/primaryReview'
import EditDish from '../EditDish'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/modal'
import TopDishes from '../TopDishes'
import './index.css'
// import { clearPrimaryAction } from '../../store/primaryReview'
import gitLogo from '../../allImages/github-logo.png';
import inLogo from '../../allImages/in.png';

export default function OneDish () {
  // const [showModal, setShowModal] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);
  const [ spinner, setSpinner ] = useState(true);
  // const [Description, setDescription] = useState();
  // let dishName = useParams()
  // dishName = Object.values(dishName)
  // const history = useHistory()
  // const dispatch = useDispatch()

  // const user = useSelector(state => state.session.user)
  // const userId = user?.id
  // const primaryDishObj = {}
  // const primaryDishes = Object.values(useSelector(state => state.primaryReview))
  // const specificDishes = primaryDishes.filter(primaryDish => primaryDish.name == dishName[0])
  // specificDishes.forEach(specificDish => {
  //   let key = specificDish.address
  //   let newRating = specificDish.rating
  //   if (!primaryDishObj[key]) {
  //     let ratingArr = [newRating]
  //     specificDish.rating = ratingArr
  //     primaryDishObj[key] = specificDish
  //   }
  //   else {
  //     console.log('hmm')
  //     primaryDishObj[key].rating.push(newRating)
  //   }
  // })
  // let finalArr = Object.values(primaryDishObj)
  // finalArr.forEach(dish => {
  //   let testArr = dish.rating
  //   let total = testArr.reduce((a,b)=>a+b)
  //   dish.rating = total
  // })
  // let sortedDishes = finalArr.sort((a, b) => b.rating - a.rating).slice(0,3)

  useEffect(() => {
    setTimeout(() => setSpinner(false), 100)
  }, []);



  // useEffect(() => {
  //   dispatch(getAllPrimaryReviewsThunk())

  // }, [dispatch])


return (
  <>
  {!spinner &&
  <TopDishes/>
}
  {/* <Footer/> */}
  </>
)
}