import React from 'react';
import { useState , useEffect} from "react";
import "./Patientlogin.css";
import { Link } from 'react-router-dom';
import Register from './registration/Register';


function PatientLogin() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
 
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 25) {
      errors.password = "Password cannot exceed more than 25 characters";
    }
    return errors;
  }

  return (
    <>


<div className="app">
      <form onSubmit={handleSubmit} >
        <h1>Sign In</h1>
        <div className="mb-3">
          
            <label className="col-sm-2 col-form-label col-form-label-lg">Username</label>
            <input className="form-control"  
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p1>{formErrors.username}</p1>
          <div className="mb-3">
            <label className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <input className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
        
          <p1>{formErrors.email}</p1>
          <div className="mb-3">
            <label className="col-sm-2 col-form-label col-form-label-lg">Password</label>
            <input className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            
          </div>
         
          <p1>{formErrors.password}</p1><br/>
          <button className="btn btn-primary">Submit</button>
          <p className='link'>
            <Link to='/register' element={<Register/>} >Sign Up?</Link>
          </p>
       
      </form>
      </div>
     
    
    </>
    
  )
}

export default PatientLogin;