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


export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {

    return (() => dispatch(clearPrimaryAction()))
}
 ,[dispatch])

return (
  <>
<div className='totalHome'>
  <div className='title1'>WonDish</div>
    <Search/>
    <Slider/>
    <CreateADishModal/>
</div>
<Footer/>
</>

)

}
