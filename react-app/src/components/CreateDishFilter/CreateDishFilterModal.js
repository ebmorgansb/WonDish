import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateDishFilter from './CreateDishFilter';
import './index.css';
import {useDispatch, useSelector} from 'react-redux'
import { clearPrimaryAction } from '../../store/primaryReview';
import { useEffect } from 'react';


export default function CreateADishModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <button className='buttonFilterRound' onClick={() => setShowModal(true)}>Create Dish Review</button>
    {showModal && (
    <Modal onClose={() => setShowModal(false)}>
        <CreateDishFilter setShowModal={setShowModal}/>
    </Modal>
    )}
    </>
  );
}
