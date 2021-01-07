import "./SignUp.css";
import React from "react";
import Modal from "react-modal";
import RegisterForm from "../registerForm/RegisterForm";

function SignUp({ modalIsOpen, closeModal }) {
  return (
    <div style={{ display: "flex" }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
}
export default SignUp;
const customStyles = {
  content: {
    width: "60%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
