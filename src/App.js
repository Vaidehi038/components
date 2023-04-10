import React  from 'react'
<<<<<<< HEAD
import Navbar from './homepage/Navigation/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './homepage/About us/Intro'
 import Reason from './homepage/Choose us/Reason'
 import Doctor from './homepage/Team/Doctor'
=======
import Navbar from './homepage/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Intro from './homepage/Intro'
 import Reason from './homepage/Reason'
 import Doctor from './homepage/Doctor'
>>>>>>> 5861cbd50a151f4643302cdfe65c35f46f904820
 import Footer from './homepage/Footer'
import Treatments from './homepage/Treatments'
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
        <Switch>
          <Route path='/treatments' element={<Treatments/>} />
        </Switch>
      </Router>
      </>
    )
}

export default App
