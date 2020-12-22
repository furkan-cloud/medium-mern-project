import { Formik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import React from "react";
import Modal from "react-modal";
function SignUp() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{ display: "flex" }}>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="containerc01">
          {/* <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React , without the tears </p>
      </div> */}
          <div className="magic-formc01">
            <Formik
              initialValues={{
                name: "",
                email: "",
                agree: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("İsim boş bırakılamaz"),
                email: Yup.string().email().required("Email boş bırakılamaz"),
                agree: Yup.bool().oneOf([true], "Koşulları kabul etmelisiniz"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm();
                }, 2000);
              }}
            >
              {({
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleSubmit,
                handleReset,
                handleChange,
              }) => (
                <form className="magic-formc01" onSubmit={handleSubmit}>
                  <h3>Kaydol</h3>
                  <label htmlFor="name">İsim</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name.."
                    className="inputc01"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedbackc01">{errors.name}</div>
                  )}
                  <label htmlFor="email" className="topMarginc01">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your e-mail"
                    className="inputc01"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.favoriteColor && touched.favoriteColor && (
                    <div className="input-feedbackc01">{errors.favoriteColor}</div>
                  )}
                  <div className="checkbox topMarginc01">
                    <input
                      id="agree"
                      type="checkbox"
                      value={values.agree}
                      onChange={handleChange}
                    />
                    <label htmlFor="agree" className="checkbox-labelc01">
                      Sözleşmeyi okudum kabul ediyorum.
                    </label>
                  </div>
                  {errors.agree && (
                    <div className="input-feedbackc01">{errors.agree}</div>
                  )}
                  <button type="submit" disabled={!dirty || isSubmitting}>
                    Kaydol
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
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