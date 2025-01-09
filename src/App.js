import logo from './logo.svg';
import './App.css';
import Welcome from './componets/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/contact';
import AboutHer from './pages/aboutmañosa';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li>
                <Link t= "/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/aboutmañosa">Mañosa</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/aboutmañosa" element={<AboutHer/>} />
            <Route path="/profile/:name" element={<Profile/>} />
          </Routes>
        </Router>
        <Welcome message ="Hola Welcome props" name="Tm0"/>
      </header>
    </div>
  );
}

export default App;
