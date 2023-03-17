import React  from 'react'
import Navbar from './homepage/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import Reason from './homepage/Reason'
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
     <Reason/>
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      </>
    )
}

export default App
