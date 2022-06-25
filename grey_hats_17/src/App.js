import './App.css';
import Navbar from './Components/Navbar';
import Center from './Components/Center';
import Card from './Components/Card';
import Login from './Components/Login';
import Pricing from './Components/Pricing';
import CheckOut from './Components/CheckOut';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
function App() {
  return (
  <Router>
   
    <Switch>
      <Route exact path="/">
      <Navbar/>
    <Center/>
    <Card />
    <Pricing />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/checkout">
        <CheckOut/>
      </Route>
    </Switch>
  </Router>
 );
}

export default App;
