import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { ModalStyle } from "../../styles/DashboardStyles/TabStyles/modalStyle";
import doneIcon from '../../assets/icon/doneicon.svg'

export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDOM.createPortal(
    <ModalStyle>
      <div className="container" ref={modalRef} onClick={closeModal}>
        <div className="modal">
          <img src={doneIcon} alt="Done" />
          <div className="modal-form">
            <div className="content">
              <p className="success">Bank Added Successfully</p>
              <p className="text">
                Your bank account has been added successfully
              </p>
            </div>
            <button className="done-btn" onClick={() => setShowModal(false)}>
              Done
            </button>
          </div>
        </div>
      </div>
    </ModalStyle>,

    document.getElementById("portal")
  );
};
