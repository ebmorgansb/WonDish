import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import './index.css'
import {useParams} from 'react-router-dom'
import CreateDish from '../CreateDish'
// import { ModalProvider } from '../../context/modal'
import { Modal } from '../../context/modal'
// import CreateDishFilter from '../CreateDishFilter/CreateDishFilter'
import Search from '../Search';
import Slider from '../Slider';
import CreateADishModal from '../CreateDishFilter/CreateDishFilterModal'
import Footer from '../Footer'
import { clearPrimaryAction } from '../../store/primaryReview'
import Google from '../GoogleAuto/GoogleAuto'
import table from '../../allImages/TABLE.jpeg';

export default function Home() {
  const dispatch = useDispatch()
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 200)
  }, []);


  useEffect(() => {

    return (() => dispatch(clearPrimaryAction()))
}
 ,[dispatch])

return (
  <>
  {!spinner &&
  <div>
<div className='totalHome'>
  <div className='title1'>WonDish</div>
  <div className='mission'>
    Welcome to WonDish - a peer review destination to help find the best restaurant to satisfy your craving. Browse existing reviews for top notch locations or contribute by adding your own
  </div>
    <Search/>
    <Slider/>
    <CreateADishModal/>
</div>
{/* <Footer/> */}
</div>
}
</>
)

}
