import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Modal from "react-modal";
import "./SignIn.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import useWindowSize from "../../hooks/useWindowSize";

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
});

const SignInForm = ({ openSignInModal, signInModalIsOpen }) => {
  const size = useWindowSize();
  const history = useHistory();
  const {
    setUserData,
    openModal,
  } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(null);

  const onSubmit = async (values) => {
    try {
      const newUser = {
        email: values.email,
        password: values.password,
      };

      const signResponse = await axios.post("/api/auth/login", newUser);
      setUserData({
        user: signResponse?.data?.user,
        token: signResponse?.data?.access_token,
      });
      localStorage.setItem("token", signResponse?.data?.access_token);
      const userResponse = await axios.get("/api/auth/user", {
        headers: { "x-auth-token": signResponse.data.access_token },
      });
      history.push("/");
      openSignInModal();
    } catch (error) {
      setErrMsg("User does not exists or password is wrong");
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

  const customStyles = {
    content: {
      width: size.width > 768 && "35%",
      height: "auto",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-40%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

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
              {...formik.getFieldProps("email")}
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
              {...formik.getFieldProps("password")}
              className="signInInput"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
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

export default SignInForm;
