import React  from 'react'
import Navbar from './homepage/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Intro from './homepage/Intro'
 import Reason from './homepage/Reason'
 import Doctor from './homepage/Doctor'
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
