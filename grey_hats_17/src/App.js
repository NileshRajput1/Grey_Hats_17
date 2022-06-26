import './App.css';
import Navbar from './Components/Navbar';
import Center from './Components/Center';
import Card from './Components/Card';
import Login from './Components/Login';
import Pricing from './Components/Pricing';
import CheckOut from './Components/CheckOut';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Testimonial from './Components/Testimonial';
import ViewAll from './Components/ViewAll';
import Stats from './Components/Stats';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Rec from './Components/Rec';
function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
      <Navbar/>
    <Center/>
    <Card />
    <Pricing />
    <Testimonial />
    <Stats/>
    <ContactUs/>
    <Footer />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/rec">
        <Rec />
      </Route>
      <Route path="/checkout">
        <CheckOut/>
      </Route>
       <Route path="/viewall">
        <ViewAll/>
      </Route>
    </Switch>
  </Router>
 );
}

export default App;
