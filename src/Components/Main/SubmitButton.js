import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../Styles/SubmitButton_Styles.css';

const SubmitButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      display: 'flex',
      flexDirection: 'column',
      margin: '20px',
      transform: 'translate(-50%, -50%)',
    },
};

  return (
    <div>
      <button onClick={openModal}>Submit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div className="overallModal">
        <h2 className="submitHeading">GET IN TOUCH</h2>
        <form className="form" method="post">
          <label>
            <input className="buttonField" type="text" placeholder="Your Name Here" required/>
          </label>
          <br />
          <label>
            <input className="buttonField" type="email" placeholder="youremail@example.com" required/>
          </label>
          <br />
          <label>
            <textarea className="buttonField" rows="4" placeholder="your message here" required/>
          </label>
          <br />
          <button className="modalButton" type="submit">Submit</button>
        </form>
        <button className="closeModalButton" onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default SubmitButton;
