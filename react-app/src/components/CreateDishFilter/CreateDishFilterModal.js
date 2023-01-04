import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateDishFilter from './CreateDishFilter';



export default function CreateADishModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button className='button' onClick={() => setShowModal(true)}>Create a Dish Review</button>
    {showModal && (
    <Modal onClose={() => setShowModal(false)}>
        <CreateDishFilter setShowModal={setShowModal}/>
    </Modal>
    )}
    </>
  );
}
