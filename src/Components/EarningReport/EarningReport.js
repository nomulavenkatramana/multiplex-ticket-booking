import React from "react";
import '../css/table.css'

function EarningReport() {

  
  return (
    <div>
      <label>From:<form><input type="date"></input></form></label>
<label>To:<form><input type="date"></input></form></label>
      <table className="table container table-bordered   table-edit"> 
  <thead>
    <tr>
      <th colspan="3">Earning Report</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6">{new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format()}</td>
      <td>Total Bookings</td>
      <td >200</td>
      
    </tr>
    <tr>
      
      <td>Booking Cancelled</td>
      <td>10</td>
      
    </tr>
    <tr>
      
      <td>Total</td>
      <td>190</td>
    </tr>
    <tr>
   
   <td>Total fare of confirmed booking</td>
   <td>190000</td>
 </tr>
 <tr>
   
   <td>Total fare of booking cancellation</td>
   <td>5000</td>
 </tr>
 <tr>
   
   <td>Total earning</td>
   <td>195000</td>
 </tr>
  </tbody>
</table>
    </div>
  )
}

export default EarningReport