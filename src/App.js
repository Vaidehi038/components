import React  from 'react'
import Navbar from './homepage/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
     
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      </>
    )
}

export default App
