import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateDishFilter from './CreateDishFilter';
import './index.css';
import {useDispatch, useSelector} from 'react-redux'
import { clearPrimaryAction } from '../../store/primaryReview';
import { useEffect } from 'react';
import EditSecondaryDish from '.';


export default function EditSecondaryDishModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
    {showModal && (
    <Modal onClose={() => setShowModal(false)}>
        <EditSecondaryDish setShowModal={setShowModal}/>
    </Modal>
    )}
    </>
  );
}