import React  from 'react'
import Navbar from './homepage/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './homepage/Intro'
 import Reason from './homepage/Reason'
 import Doctor from './homepage/Doctor'
 import Footer from './homepage/Footer'
// const App = () => {
  // return (
  // <Navbar/>
  // )
  //  }
  function App() {
    return(
      <>
      <Router>
      <Navbar/>
      <Intro />
     <Reason/>
     <Doctor/>
     <Footer />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      </>
    )
}

export default App
