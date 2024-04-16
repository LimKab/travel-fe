import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/navbar/home page/Home';
import About from './components/about/About';
import AuthorsChoice from './components/Author\'s Choice/AuthorsChoice';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/authors-choice' element={<AuthorsChoice />} />
      </Routes>
    </Router>
  );
}

export default App;
