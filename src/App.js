import React, {useState, createContext,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/homePage/Home';
import ArticleDetails from './pages/articleDetail/ArticleDetails';
import ProfileDetailList from './pages/profileDetailList/ProfileDetailList';


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
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/profileDetail' component={ProfileDetailList} exact />
          <Route path='/articleDetails' component={ArticleDetails} exact />
          <Route path='/' component={Home} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
