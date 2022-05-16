import '../css/table.css'
import React, { Component } from 'react'  
import axios from "axios";  
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
export class EarningReport  extends Component {
  constructor(props) {  
    super(props)  

    this.state = {  
        employeeData: [],  
        startDate: '' ,  
        endDate:''   
    }  
}  
ChangeDate = (e) => {    
    this.setState({    
            startDate: e    
    });    
};  
endDate = (e) => {    
this.setState({    
    endDate: e    
});    
};  
componentDidMount() {  
    axios.get('http://localhost:1141/Api/Searchdata/showdata').then(response => {  
        console.log(response.data);  
        this.setState({  
            employeeData: response.data  
        });  
    });  
}  
onsubmit = (e) => {    
    debugger;  
    const data = { startDate:this.state.startDate, endDate:this.state.endDate};    
    e.preventDefault();    
    axios.post('http://localhost:1141/Api/Searchdata/search',data).then(response =>{
        console.log(response.data);  
        this.setState({  
            employeeData: response.data  
        });  
    });  
}     
render() {  
    return (  
        <div>  
            <div className="row">  
                <div className="col-sm-12 btn btn-info">  
                    How to  Search Earning Report Between Two Dates  
             </div>  
            </div>  
            <form onSubmit={this.onsubmit}>  
                <div className="row hdr" >  
                    <div className="col-sm-3 form-group">  </div>  
                    <div className="col-sm-3 form-group">  
                    <DatePicker className="form-control"    
                        selected={this.state.startDate} 
                        placeholderText="Select Date" showPopperArrow=
                          {false}    
                                 onChange={this.ChangeDate}    
                         />    
 </div>  
 <div className="col-sm-3 form-group">  
          <DatePicker className="form-control"    
                                 selected={this.state.endDate} 
placeholderText="Select Date" showPopperArrow=
{false}    
                                 onChange={this.endDate}    
                         /> 
                         </div>   
                    <div className="col-sm-3 form-group">  
                        <button type="submit" className="btn btn-success" >Search</button>
                    </div>  
                </div>  
            </form>  
            <table className="table">  
                <thead className="thead-dark">  
                    <tr>  
                        <th scope="col">Total Bookings</th>  
                        <th scope="col">Cancelled Bookings</th>  
                        <th scope="col">Total fare of confirmed booking</th>  
                        <th scope="col">Total fare of booking cancellation</th>  
                        <th scope="col">Total earning</th> 
                    </tr>  
                </thead>  
                <tbody>  
                    {  
                this.state.employeeData.map((p, index) => {  
                  return  <tr key={index}>  
                        <th scope="row">{p.Id}</th>  
                        <td>{p.Name}</td>  
                        <td>{p.City}</td>  
                <td>{p.JoiningDate }</td>  
                    </tr>  
                })   
                }  
                </tbody>  
            </table>  

        </div>  
    )  
  }  
}


export default EarningReport

{/* <td rowspan="6">{new Intl.DateTimeFormat("en-GB", { */}
  // year: "numeric",
  // month: "long",
  // day: "2-digit"
// }).format()}</td>