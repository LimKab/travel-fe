import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import Profile from './components/pages/profile/Profile';
import About from './components/pages/about/About';
import AuthorsChoice from './components/pages/authorsChoice/AuthorsChoice';
import TestMaps from './components/googleMaps/TestMap.jsx';
import UserData from './contexts/UserData.js';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {

  const [userdata, setUserdata] = useState();


  return (
    <>
      <UserData.Provider value={{ userdata, setUserdata }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/authors-choice' element={<AuthorsChoice />} />
            <Route path='/googleMaps' element={<TestMaps />} />
          </Routes>
        </Router>
      </UserData.Provider>
      < ToastContainer />
    </>
  );
}

export default App;
