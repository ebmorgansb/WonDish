import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import './index.css'
import {useParams} from 'react-router-dom'
import CreateDish from '../CreateDish'
// import { ModalProvider } from '../../context/modal'
import { Modal } from '../../context/modal'
import CreateDishFilter from '../CreateDishFilter/CreateDishFilter'
import Search from '../Search';
import Slider from '../Slider';


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()


return (
<div className='totalHome'>
  <div className='search'>
    <Search/>
  </div>
  <button onClick={() => setShowModal(true)}>Create a Dish Review</button>
  {showModal && (
  <Modal onClose={() => setShowModal(false)}>
    <CreateDishFilter setShowModal={setShowModal}/>
  </Modal>
  )}
  <div>
    <Slider/>
  </div>
</div>

)

}
