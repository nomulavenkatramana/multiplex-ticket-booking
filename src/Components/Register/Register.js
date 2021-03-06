import React from "react";

class Register extends React.Component {

  state = {
      firstName : '',
      lastName:'',
      mobileNo:'',
      email:'',
      password:'',
      firstNameErr : '',
      lastNameErr:'',
      mobileNoErr:'',
      emailErr:'',
      passwordErr:'',  
  }

  handleChange = (e) =>{
    // console.log(e)
    const {name,value} = e.target;
    this.setState({ [name] : value})
    console.log("afer setstate");
    }

    validateTheForm =() =>{
      let firstNameErr ='';
      let lastNameErr = '';
      let mobileNoErr ='';
      let emailErr = '';
      let passwordErr = '';

      if(this.state.firstName.length<4){
        firstNameErr = "firstName should be minimum of 4 characters";
      }
      if(this.state.lastName.length<4){
        lastNameErr = "lastName should be minimum of 4 characters";
      }
      if(this.state.mobileNo.length<10){
          mobileNoErr= "mobileNo should be 10 digits";
      }

      if(!this.state.email.includes('@')){
        emailErr = "Enter a valid email";
      }

      if(this.state.password.length<6){
        passwordErr = "password should be minimum of 6 characters";
      }
      // falsy values
      // 0,undefined,null,false,""
      
      if(firstNameErr || lastNameErr || emailErr || mobileNoErr || passwordErr){
        this.setState({firstNameErr ,lastNameErr, mobileNoErr,emailErr,passwordErr});
      }else{
        this.setState({firstNameErr,lastNameErr,mobileNoErr,emailErr,passwordErr})
      } 
    }

    handleSubmit = (e)=>{
      e.preventDefault();
      this.validateTheForm();
    }

   render(){ 
    return (
    <div>
      <div className="container">
        <center>
          <h2>Register</h2>
        </center>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your FirstName"
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <span className="text-danger">{this.state.firstNameErr}</span>
              <div className="mb-3">
                <input
                  type="lastName"
                  className="form-control"
                  placeholder="Enter your LastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <span className="text-danger">{this.state.lastNameErr}</span>

              <div className="mb-3">
                <input
                  type="mobileNo"
                  className="form-control"
                  placeholder="Enter your mobileNo"
                  name="mobileNo"
                  value={this.state.mobileNo}
                  onChange={this.handleChange}
                />
              </div>
              <span className="text-danger">{this.state.mobileNoErr}</span>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <span className="text-danger">{this.state.emailErr}</span>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <span className="text-danger">{this.state.passwordErr}</span>

              <button className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
}

export default Register;