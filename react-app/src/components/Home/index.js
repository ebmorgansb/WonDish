import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import Modal from 'react-modal';
import './index.css'
import {useParams} from 'react-router-dom'
import CreateDish from '../CreateDish'
import ProfileModal from '../ProfileModal'
import { ModalProvider } from '../../context/modal'
import CreateDishFilter from '../CreateDishFilter'
import Search from '../Search';
import Slider from '../Slider';

export default function Home() {

  const dispatch = useDispatch()


return (
<div className='totalHome'>
  <h1>WonDish</h1>
  <div className='search'>
    <Search/>
  </div>
  <div className='filter'>
    <CreateDishFilter/>
  </div>
  <div>
    <Slider/>
  </div>
</div>
)

}

// const [modalIsOpen, setModalIsOpen] = useState(false);
// const openModal = () => {
//   setModalIsOpen(true);
// }
// const closeModal = () => {
//   setModalIsOpen(false);
// }


{/* <button onClick={openModal}>Open Modal</button>
<Modal
className="modal-content" isOpen={modalIsOpen} onRequestClose={closeModal}>
    <CreateDishFilter/>
</Modal>
    <ProfileModal/> */}