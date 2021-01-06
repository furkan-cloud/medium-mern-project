import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homePage/Home";
import ArticleDetails from "./pages/articleDetail/ArticleDetails";
import PostEditor from "./components/addpost/PostEditor";
import UserContext from "./context/UserContext";
import Main from "./pages/mainPage/Main";

import ProfilDetail from "./components/profil/ProfilDetail";
import MyProfile from "./pages/myProfile/MyProfile";

function App() {
  const [userData, setUserData] = useState({ user: null, token: null });
  const [authToken, setAuthToken] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState(null);
  const [signInModalIsOpen, setSignInModalOpen] = useState(false);

  const openSignInModal = () => setSignInModalOpen(!signInModalIsOpen);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const userCheck = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        const userResponse = await axios.get(
          "http://localhost:5000/api/auth/user",
          { headers: { "x-auth-token": token } }
        );
        setUserData({ user: userResponse?.data?.user, token });
        setAuthToken(token);
      }
    };
    userCheck();
  }, [
    userData?.user?.email,
    userData?.user?.followingCount,
    userData?.user?.readingListCount,
    userData?.user?.claps,
  ]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleData = await axios.get("http://localhost:5000/api/posts");
      setArticles(articleData?.data?.data);
    };
    fetchArticles();
  }, [
    userData?.user?.readingListCount,
    userData?.user?.email,
    articles?.likeCount,
  ]);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          openModal,
          closeModal,
          modalIsOpen,
          setIsOpen,
          articles,
          setArticles,
          signInModalIsOpen,
          setSignInModalOpen,
          openSignInModal,
          setAuthToken,
          authToken,
        }}
      >
        <div className="App">
          {userData.token ? <Navbar /> : null}

          <Switch>
            <Route path="/myProfile/:id" component={MyProfile} exact />
            <Route path="/profileDetail/:id" component={ProfilDetail} exact />
            <Route path="/articleDetail/:id" component={ArticleDetails} exact />
            <Route path="/posts/add" component={PostEditor} exact />
            <Route path="/" component={userData.token ? Home : Main} />
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
