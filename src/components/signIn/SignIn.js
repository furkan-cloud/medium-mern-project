import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Modal from "react-modal";
import "./SignIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must contain at least 6 characters"),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  // ),
});

const SignInForm = ({ openSignInModal, signInModalIsOpen }) => {
  const history = useHistory();
  const {
    setUserData,
    openModal,
    // userData,
    // setAuthToken,
    // authToken,
  } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState(null);

  const onSubmit = async (values) => {
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const signResponse = await axios.post(
        "http://localhost:5000/api/auth/login",
        newUser
      );
      console.log(signResponse);
      setUserData({
        user: signResponse?.data?.user,
        token: signResponse?.data?.access_token,
      });
      localStorage.setItem("token", signResponse?.data?.access_token);
      const userResponse = await axios.get(
        "http://localhost:5000/api/auth/user",
        { headers: { "x-auth-token": signResponse.data.access_token } }
      );
      history.push("/");
      openSignInModal();
    } catch (error) {
      setErrMsg("User does not exists or password is wrong");
      // console.log(error.response.data.errors[0]);
      setTimeout(() => setErrMsg(null), 3000);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleCreateClick = () => {
    openSignInModal();
    openModal();
  };

  // const handleOnClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const newUser = {
  //       email,
  //       password,
  //     };

  //     const signResponse = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       newUser
  //     );
  //     setUserData({
  //       user: signResponse?.data?.user,
  //       token: signResponse?.data?.access_token,
  //     });
  //     localStorage.setItem("token", signResponse?.data?.access_token);
  //     const userResponse = await axios.get(
  //       "http://localhost:5000/api/auth/user",
  //       { headers: { "x-auth-token": signResponse.data.access_token } }
  //     );
  //     history.push("/");
  //     openSignInModal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <Modal
        isOpen={signInModalIsOpen}
        onRequestClose={openSignInModal}
        style={customStyles}
      >
        {errMsg && <div className="error">{errMsg}</div>}
        <form className="signInForm" onSubmit={formik.handleSubmit}>
          <div className="signInContainer">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.email}
              {...formik.getFieldProps("email")}
              // onChange={(e) => setEmail(e.target.value)}
              className="signInInput"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="signInContainer">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.password}
              {...formik.getFieldProps("password")}
              // onChange={(e) => setPassword(e.target.value)}
              className="signInInput"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          {/* <button onClick={handleOnClick} className="modalSignIn">
            Sign In
          </button> */}
          <button type="submit" className="modalSignIn">
            Sign In
          </button>
          <p>
            {" "}
            No account?
            <span
              style={{ color: "#1a8917", cursor: "pointer" }}
              onClick={handleCreateClick}
            >
              Create one
            </span>
          </p>
        </form>
      </Modal>
    </div>
  );
};

// No account? Create one

export default SignInForm;

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
