import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homePage/Home";
import ArticleDetails from "./pages/articleDetail/ArticleDetails";
import PostEditor from "./components/addpost/PostEditor";
import UserContext from "./context/UserContext";
import Main from "./pages/mainPage/Main";
import Header from "./components/headers/Header";
import ProfilDetail from "./components/profil/ProfilDetail";
import MyProfile from "./pages/myProfile/MyProfile";

// const fetchArticles = async ()

// const articleSearch = (article) => {
//   const filteredList = originalList.filter((item) => {
//     const userText = text.toUpperCase();
//     const cityName = item.toUpperCase();
//     return cityName.indexOf(userText) > -1;
//   });
//   setCityList(filteredList);
// };

function App() {
  const [userData, setUserData] = useState({ user: null, token: null });
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
    const fetchArticles = async () => {
      const articleData = await axios.get("http://localhost:5000/api/posts");
   
      setArticles(articleData?.data?.data);
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const userCheck = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        const userResponse = await axios.get(
          "http://localhost:5000/api/auth/user",
          { headers: { "x-auth-token": token } }
        );
        setUserData({ user: userResponse?.data?.user, token });
        
      }
    };
    userCheck();
  }, [userData.token]);

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
        }}
      >
        <div className="App">
          {userData.token ? <Navbar /> : <Header />}

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
