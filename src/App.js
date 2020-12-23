import React, {useState, createContext,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/homePage/Home';
import ArticleDetails from './pages/articleDetail/ArticleDetails';
import ProfileDetailList from './pages/profileDetailList/ProfileDetailList';
import RegisterForm from './components/registerForm/RegisterForm';
import UserContext from "./context/UserContext"
import Main from './pages/mainPage/Main';
import Header from "./components/headers/Header"


// const fetchArticles = async ()

// const articleSearch = (article) => {
//   const filteredList = originalList.filter((item) => {
//     const userText = text.toUpperCase();
//     const cityName = item.toUpperCase();
//     return cityName.indexOf(userText) > -1;
//   });
//   setCityList(filteredList);
// };


function App(){
  const [userData, setUserData] = useState({user: null, token: null})
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [articles, setArticles] = useState(null);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchArticles = async() => {
      const articleData = await axios.get("http://localhost:5000/api/posts")
     //console.log(articleData.data.data);
      setArticles(articleData.data.data)
    }
    fetchArticles(); 
  }, [])

  useEffect(() =>{
    const userCheck = async() =>{
      let token = localStorage.getItem("token")
      if (token){
        const userResponse = await axios.get("http://localhost:5000/api/auth/user", {headers: {"x-auth-token": token}})
        setUserData({user: userResponse.data.user, token})
      }
    }
    userCheck()
  },[])


  return (
    <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData, openModal, closeModal, modalIsOpen, setIsOpen, articles}}>
      <div className="App">
        {userData.user ? <Navbar /> : <Header/> }
        
        <Switch>
          <Route path='/profileDetail/:id' component={ProfileDetailList} exact />
          <Route path='/articleDetail/:id' component={ArticleDetails} exact />    
          <Route path='/' component={userData.user ? Home : Main} />      
        </Switch>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
