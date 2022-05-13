import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


function ShowDetails(){
    return (
        <div>
        <div className="container py-5">
            <div className='row'>
                
                {/* //First movie */}
                        <div className='col-md-4'>
                           
                            <div className="card p-4">
                            <img src="../movieImages/kgf2.jpg" className="card-img-top " alt="kgf2" />
                            <div className="card-body">
                                <h5 className="KGF2">KGF2</h5>
                                 <h6> Show Time : 9:00 AM</h6>
                                 <h6> Show Time : 1:00 PM</h6>
                                 <h6> Show Time : 7:00 PM</h6>
                                 <h6> Hall 1A</h6>
                                <a href="#" class="btn btn-primary me-3">View Details</a>
                                <a href="#" class="btn btn-primary">Book Show</a>
                            </div>
                            </div>     
                        </div>     

                        {/* // Second movie */}

                        <div className='col-md-4'>
                           
                            <div className="card p-4">
                            <img src="../movieImages/RRR.jpg" className="card-img-top " alt="RRR" />
                            <div className="card-body">
                                <h5 className="RRR">RRR</h5>
                                <h6> Show Time : 9:00 AM</h6>
                                <h6> Show Time : 1:00 PM</h6>
                                <h6> Show Time : 7:00 PM</h6>
                                 <h6> Hall 2A</h6>
                                <a href="#" class="btn btn-primary me-3 ">View Details</a>
                                <a href="#" class="btn btn-primary">Book Show</a>
                            </div>
                            </div>     
                        </div>     

                        {/* // Third movie */}

        <div className='col-md-4'>
   
                  <div className="card p-4">
                    <img src="../movieImages/DrStrange.jpg" className="card-img-top " alt="Doctor Strange : In the Multiverse of Madness" />
                    <div className="card-body">
                    <h5 className="Dr.Strange">Doctor Strange : In the Multiverse of Madness</h5>
                        <h6> Show Time : 9:00 AM</h6>
                        <h6> Show Time : 1:00 PM</h6>
                        <h6> Show Time : 7:00 PM</h6>

                                 <h6> Hall 3A</h6>
                    <a href="#" class="btn btn-primary me-3">View Details</a>
                     <a href="#" class="btn btn-primary">Book Show</a>
          </div>
         </div>     
   </div>     
                         {/* Fourth movie */}
                      
                        <div className='col-md-4'>
                           
                           <div className="card p-4">
                           <img src="../movieImages/jurassic world dominion.jpg" className="card-img-top " alt="jurassic world dominion" />
                           <div className="card-body">
                               <h5 className="KGF2">Jurassic World: Dominion</h5>
                               <a href="#" class="btn btn-primary me-3">View Details</a>
                               <a href="#" class="btn btn-primary">Book Show</a>
                           </div>
                           </div>     
                       </div>     
                                {/* Fift movie */}

                         <div className='col-md-4'>
                           
                           <div className="card p-4">
                           <img src="../movieImages/Runway.jpg" className="card-img-top " alt="Rumway24" />
                           <div className="card-body">
                               <h5 className="KGF2">Runway24</h5>
                               <a href="#" class="btn btn-primary me-3">View Details</a>
                               <a href="#" class="btn btn-primary">Book Show</a>
                           </div>
                           </div>     
                       </div>     
                                     {/* Sixth movie */}

                                     <div className='col-md-4'>
                           
                           <div className="card p-4">
                           <img src="../movieImages/jersey.jpg" className="card-img-top " alt="Jersey" />
                           <div className="card-body">
                               <h5 className="KGF2">Jersey</h5>
                               <a href="#" class="btn btn-primary me-3">View Details</a>
                               <a href="#" class="btn btn-primary">Book Show</a>
                           </div>
                           </div>     
                       </div>     

            </div>
        </div>
    </div>
    )
}
  export default ShowDetails