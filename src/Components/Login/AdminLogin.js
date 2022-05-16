import React from "react";
import {Link} from "react-router-dom"


class AdminLogin extends React.Component {

  state = {
      email:'',
      password:'',
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
      let emailErr = '';
      let passwordErr = '';

      if(!this.state.email.includes('@')){
        emailErr = "Enter a valid email";
      }

      if(this.state.password.length<6){
        passwordErr = "password should be minimum of 6 characters";
      }
      // falsy values
      // 0,undefined,null,false,""
      
      if( emailErr || passwordErr){
        this.setState({emailErr,passwordErr});
      }else{
        this.setState({emailErr,passwordErr})
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
          <h2>Admin Login </h2>
        </center>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={this.handleSubmit}>
              
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

              <button   className="btn btn-primary">
                Submit
              </button>
              
              <Link to="/AddMovies" class="nav-link px-2 link-dark" >AddMovies</Link>
              <Link to="/EarningReport" class="nav-link px-2 link-dark" >EarningReport</Link>
              
              
          
            </form>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
}

export default AdminLogin;