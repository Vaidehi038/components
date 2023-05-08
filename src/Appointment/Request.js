import React from 'react';

import Button from 'react-bootstrap/Button';


class Request extends React.Component {

    constructor() {   
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input});
  }    
  handleSubmit(event) {

    event.preventDefault();
    if(this.validate()){
         console.log(this.state);
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["phone"] = "";
        input["date"] = "";


        // input["address"] = "";

        this.setState({input:input});
        alert('Appointment request is submited');
    }

  }

  validate(){

      let input = this.state.input;
      let errors = {};
      let isValid = true;
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
      if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Please enter your phone number.";
      }
      if (typeof input["phone"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(input["phone"].length !== 10){
          isValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      }
      this.setState({
        errors: errors
      });
      return isValid;
  }
  render() {
    return (
      <div className='app'>
        <form onSubmit={this.handleSubmit}>
          <h1>Book Appointment</h1>
          <div className="mb-3">
            <label className="col-sm-2 col-form-label col-form-label-lg">Name:</label>
            <input className="form-control"  
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange} 
              placeholder="Enter name" 
              id="name" 
              />

              <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div className="mb-3">
            <label  className="col-sm-2 col-form-label col-form-label-lg">Email Address:</label>
            <input className="form-control"  
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange} 
              placeholder="Enter email" 
              id="email" 
              />

              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="mb-3">
            <label  className="col-sm-2 col-form-label col-form-label-lg">Phone:</label>
            <input className="form-control"  
              type="text" 
              name="phone" 
              value={this.state.input.phone}
              onChange={this.handleChange}
              placeholder="Enter phone" 
              id="email" 
              />

              <div className="text-danger">{this.state.errors.phone}</div>
        </div>

          <div className="mb-3">
             <label  className="col-sm-2 col-form-label col-form-label-lg">Address:</label>
            <input className="form-control" 
              name="address"
              value={this.state.input.comment} 
              onChange={this.handleChange}
              placeholder="Enter Address" 
              />

              <div className="text-danger">{this.state.errors.comment}</div>
          </div>

          <div className="mb-3">
            <label  className="col-sm-2 col-form-label col-form-label-lg">Select Date: </label>
            <input className="form-control"  type='date' value={this.state.date} onChange={this.handleDateChange}/>
            </div><br/> 

          <Button type="submit">Book Appointment</Button>

        </form>
        
      </div>

    );

  }

}

  

export default Request;