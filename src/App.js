import './App.css';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoadingAnimation from './components/LoadingAnimation';
import Main from './components/Main';
import ApiForm from './components/ApiForm';
import CropRecomendation from './components/CropRecomendation';
import News from './components/News';
import { useState} from 'react';

function App() {

  const [loading, setLoading] = useState(true);
  
  setTimeout(()=>{
    setLoading(false);
  },1500)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={loading?<LoadingAnimation />:<LandingPage/>} />
        <Route exact path='/home' element={<Navbar><Main/></Navbar>} />
        <Route exact path='/CheckVegetation' element={<Navbar><ApiForm /></Navbar>} />
        <Route exact path='/Crop' element={<Navbar><CropRecomendation /></Navbar>} />
        <Route exact path='/News' element={<Navbar><News /></Navbar>} />
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
