import React from 'react';
import Navbar from './homepage/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './homepage/About us/Intro';
import Reason from './homepage/Choose us/Reason';
import Doctor from './homepage/Team/Doctor';
import Footer from './homepage/Footer/Footer';
import Treatments from './homepage/Treatments';
import HeroImage from './homepage/HeroImage/welcome';
import PatientLogin from './Logins/PatientLogin';

function App() {
  const homePage = (
    <>
      <HeroImage />
      <Intro />
      <Reason />
      <Doctor />ß
    </>
  );
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/treatments' element={<Treatments />} />
          <Route path='/login' element={<PatientLogin />} />
          <Route path='' element={homePage}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
