import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from '../auth/LoginForm';
import LogoutButton from '../auth/LogoutButton';
import SignUpForm from '../auth/SignUpForm';


export default function ProfileModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Profile</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} >
          < SignUpForm/>
        </Modal>
      )}
    </>
  );
}
