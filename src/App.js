
// import './App.css';
import Header from './components/header/Header';
import SignUp from '../src/components/SignUp/SignUp'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/signup" component={SignUp} exact />
      <Route path="/" component={Header} />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
