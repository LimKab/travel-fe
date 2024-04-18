import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage/Home';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import AuthorsChoice from './components/authorsChoice/AuthorsChoice';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/authors-choice' element={<AuthorsChoice />} />
      </Routes>
    </Router>
  );
}

export default App;
