import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateDishFilter from './CreateDishFilter';
import './index.css'



export default function CreateADishModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='buttonFilter' onClick={() => setShowModal(true)}>Create a Dish Review</button>
    {showModal && (
    <Modal onClose={() => setShowModal(false)}>
        <CreateDishFilter setShowModal={setShowModal}/>
    </Modal>
    )}
    </>
  );
}
