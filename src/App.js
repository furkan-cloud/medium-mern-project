import './App.css';
import Navbar from './components/navbar/Navbar.js';
import FollowList from './components/followList/FollowList';
import TopicsList from './components/topicsToFollow/TopicsList';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainCard from './components/mainCard/MainCard';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import Home from './pages/homePage/Home';
import ArticleDetails from './pages/articleDetail/ArticleDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/articleDetails' component={ArticleDetails} exact />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


{/* <BrowserRouter>
<NewsContext.Provider value={{newsList, setNewsList, categorySource, selectedCategory, setSelectedCategory, selectedNews, setSelectedNews }}>
  <NavBar />
  <Switch>
    <Route path='/details' component={NewsDetails} exact />
    <Route path='/' component={NewsBanner} />
  </Switch>
</NewsContext.Provider>
</BrowserRouter> */}