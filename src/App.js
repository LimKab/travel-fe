import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import Profile from './components/pages/profile/Profile';
import About from './components/pages/about/About';
import AuthorsChoice from './components/pages/authorsChoice/AuthorsChoice';
import TripCard from './TripResults/TripCard';
// import TestMaps from './components/googleMaps/TestMap.jsx';
import TestMaps from './components/googleMaps/TestMap.jsx';
import UserData from './contexts/UserData.js';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TripResults from './components/pages/resultsPage/TripResults.jsx';
import TripModal from './contexts/TripModal.js';
import TripDataContext from './contexts/TripDataContext.js';
import { loadStoredUserData } from './utils/utility.js';



function App() {

  const [userdata, setUserdata] = useState();
  const [showTripModal, setShowTripModal] = useState(false)
  const [tripToSeeMore, setTripToSeeMore] = useState(null)
  const [showTripDialog, setShowTripDialog] = useState(false)
  const [formData, setFormData] = useState(null)
  const [tripData, setTripData] = useState(null)


  const handleLoadupSettings = () => {
    setUserdata(loadStoredUserData())
  }

  useEffect(() => {
    handleLoadupSettings()
  }, [])

  return (
    <>
      <UserData.Provider value={{ userdata, setUserdata }}>
        <TripModal.Provider value={{ showTripModal, setShowTripModal, showTripDialog, setShowTripDialog, tripToSeeMore, setTripToSeeMore }}>
          <TripDataContext.Provider value={{ formData, setFormData, tripData, setTripData }}>
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
                <Route path='/saved-trips' element={<TripCard />} />
                <Route path='/my-trips' element={<TripCard />} />
                <Route path='/my-reviews' element={<TripCard />} />
              </Routes>
            </Router>
          </TripDataContext.Provider>
        </TripModal.Provider>
      </UserData.Provider >
      < ToastContainer />
    </>
  );
}

export default App;
