import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component ={Home} />
      <Route path="/signup" component ={Signup} />
      <Route path="/login" component ={Login} />
   
    </div>
    </Router>
  );
}

export default App;
