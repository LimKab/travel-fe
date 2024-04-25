import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import Profile from './components/pages/profile/Profile';
import About from './components/pages/about/About';
import AuthorsChoice from './components/pages/authorsChoice/AuthorsChoice';
// import Comments from './TripResults/Comments';
import TripCard from './TripResults/TripCard';
// import TestMaps from './components/googleMaps/TestMap.jsx';
import TestMaps from './components/googleMaps/TestMap.jsx';
import UserData from './contexts/UserData.js';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TripResults from './components/pages/resultsPage/TripResults.jsx';
import TripDataContext from './contexts/TripDataContext.js';


function App() {

  const [userdata, setUserdata] = useState();
  const [formData, setFormData] = useState(null)


  return (
    <>
      <UserData.Provider value={{ userdata, setUserdata }}>
        <TripDataContext.Provider value={{ formData, setFormData }}>

          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {userdata && <Route path='/profile' element={<Profile />} />}
              <Route path='/authors-choice' element={<AuthorsChoice />} />
              <Route path='/googleMaps' element={<TestMaps />} />
              <Route path='/results' element={<TripResults />} />
              <Route path='/tripresults' element={<TripCard />} />
            </Routes>
          </Router>
        </TripDataContext.Provider>
      </UserData.Provider>
      < ToastContainer />
    </>
  );
}

export default App;
