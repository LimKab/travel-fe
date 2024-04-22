import './App.css';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import Profile from './components/pages/profile/Profile';
import About from './components/pages/about/About';
import AuthorsChoice from './components/pages/authorsChoice/AuthorsChoice';
  // import Comments from './TripResults/Comments';
// import TripCard from './TripResults/TripCard';
// import TestMaps from './components/googleMaps/TestMap.jsx';
import TestMaps from './components/googleMaps/TestMap.jsx';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/authors-choice' element={<AuthorsChoice />} />
            {/* <Route path='/tripresults' element={<TripCard />} /> */}
        {/* <Route path='/googleMaps' element={<TestMaps />} /> */}
        <Route path='/googleMaps' element={<TestMaps/>}/>

      </Routes>
    </Router>
  );
}

export default App;
