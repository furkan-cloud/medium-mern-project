import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import "./RegisterForm.css";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import SignIn from "../signIn/SignIn";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 6 characters, one uppercase, one number and one special case character"
    ),
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "firstName must contain at least 2 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "lastName must contain at least 2 characters"),
});

const RegisterForm = ({ modalIsOpen, closeModal }) => {
  const {
    userData,
    setUserData,
    signInModalIsOpen,
    openSignInModal,
  } = useContext(UserContext);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);
  const handleSignInClick = () => {
    closeModal();
    openSignInModal();
  };
  const history = useHistory();
  const onSubmit = async (values) => {
    try {
      const newUser = {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      };

      const registerResponse = await axios.post("/api/auth/register", newUser);
      setUserData({ ...userData, token: registerResponse.data.access_token });
      localStorage.setItem("token", registerResponse.data.access_token);
      const userResponse = await axios.get("/api/auth/user", {
        headers: { "x-auth-token": registerResponse.data.access_token },
      });
      setUserData({
        user: userResponse?.data?.user,
        token: registerResponse.data.access_token,
      });
      closeModal();
      history.push("/");
    } catch (error) {
      setErrMsg(error.response.data.errors[0].message);
      // console.log(error.response.data.errors[0].message);
      setTimeout(() => setErrMsg(null), 3000);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // const handleOnClick = async (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   };
  //   const registerResponse = await axios.post(
  //     "http://localhost:5000/api/auth/register",
  //     newUser
  //   );
  //   setUserData({ ...userData, token: registerResponse.data.access_token });
  //   localStorage.setItem("token", registerResponse.data.access_token);
  //   const userResponse = await axios.get(
  //     "http://localhost:5000/api/auth/user",
  //     { headers: { "x-auth-token": registerResponse.data.access_token } }
  //   );
  //   setUserData({
  //     user: userResponse?.data?.user,
  //     token: registerResponse.data.access_token,
  //   });
  //   closeModal();
  //   history.push("/");
  // };
  return (
    <div className="registerFormContainer">
      <SignIn openSignInModal={signInModalIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {errMsg && <div className="error">{errMsg}</div>}
        <form className="registerForm" onSubmit={formik.handleSubmit}>
          <div className="modalInputContainer">
            <label className="input-label">First Name</label>
            <input
              className="registerFormInput"
              type="text"
              name="firstName"
              // id="rfirstName"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.email}
              {...formik.getFieldProps("firstName")}
              // onChange={(e) => setFirstName(e.target.value)}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="modalInputContainer">
            <label className="input-label">Last Name</label>
            <input
              className="registerFormInput"
              type="text"
              name="lastName"
              // id="rlastName"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.lastName}
              {...formik.getFieldProps("lastName")}
              // onChange={(e) => setlastName(e.target.value)}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="modalInputContainer">
            <label className="input-label">Email </label>
            <input
              className="registerFormInput"
              type="email"
              name="email"
              // id="remail"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.email}
              {...formik.getFieldProps("email")}
              // onChange={(e) => setEmail(e.target.value)}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="modalInputContainer">
            <label className="input-label">Password</label>
            <input
              className="registerFormInput"
              type="password"
              name="password"
              // id="rpassword"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.password}
              {...formik.getFieldProps("password")}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* <button onClick={handleOnClick} className="modalRegister">
            Register
          </button> */}
          <button type="submit" className="modalRegister">
            Register
          </button>
          <p>
            Already have an account?
            <span
              style={{ color: "#1a8917", cursor: "pointer" }}
              onClick={handleSignInClick}
            >
              Sign In
            </span>
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default RegisterForm;

const customStyles = {
  content: {
    width: "30%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};
