import React  from 'react'
import Navbar from './homepage/Navigation/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './homepage/About us/Intro'
 import Reason from './homepage/Choose us/Reason'
 import Doctor from './homepage/Team/Doctor'
 import Footer from './homepage/Footer'
import Treatments from './routes/Treatments'
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
          <Route path='/treatments' element={<Treatments/>} />
        </Routes>
      </Router>
      </>
    )
}

export default App
