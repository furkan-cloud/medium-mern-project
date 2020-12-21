import './App.css';
import Navbar from './components/navbar/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/homePage/Home';
import ArticleDetails from './pages/articleDetail/ArticleDetails';
import ProfileDetailList from './pages/profileDetailList/ProfileDetailList';


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
