import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Home/><Footer/></>} />
          <Route path="/game/:id" element={<><Navbar /><GameDetails/><Footer/></>} />
          <Route path="/profile" element={<><Navbar /><Profile/><Footer/></>} />
          <Route path="/about" element={<><Navbar /><About/><Footer/></>} />
          <Route path="/contact" element={<><Navbar /><Contact/><Footer/></>} />
          <Route path="/login" element={<><Nav/><Login /></>} />
          <Route path="/register" element={<><Nav/><Register /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
