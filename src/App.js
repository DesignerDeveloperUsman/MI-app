import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Slider from './components/Slider';
import {banner} from "./data/data.json"
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <Router>
    <PreNavbar/>
    <Navbar/>
    <Slider start={banner.start}/>
    <Offers Offers={DataTransfer.Offer}/>
    </Router>
  );
}

export default App;
