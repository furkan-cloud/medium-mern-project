import './App.css';
import Navbar from './components/navbar/Navbar.js';
import FollowList from './components/followList/FollowList';
import TopicsList from './components/topicsToFollow/TopicsList';
import { BrowserRouter, Route } from 'react-router-dom'
import MainCard from './components/mainCard/MainCard';
import SectionOne from './components/sectionOne/SectionOne';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <SectionOne/>
      </div>
    </BrowserRouter>
  );
}

export default App;
