import React from 'react'


import Strange from '../Details/MovieDetails';



function ViewDetails(){
  return(
    <div>
      <div className="container py-5">
        <div className='row'>

          {/* // first movie */}
              <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/kgf 2.jpg" className="card-imp-top" alt= "kgf" />
                  <div className="card-body">
                      <h5 className="KGF2">KGF2</h5>
                      <h6>Show Time : 9.00 AM</h6>
                      <h6>Show Time : 1.00 PM</h6>
                      <h6>Show Time : 7.00 PM</h6> 
                      <h6>Hall 1A</h6>
                      <a href="#" class="btn btn-primary me-3">View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                  </div>
                  </div>
              </div>
          

          {/* // second movie */}
          <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/RRR.jpg" className="card-imp-top" alt= "RRR" />
                  <div className="card-body">
                      <h5 className="RRR">RRR</h5>
                      <h6>Show Time : 9.00 AM</h6>
                      <h6>Show Time : 1.00 PM</h6>
                      <h6>Show Time : 7.00 PM</h6> 
                      <h6>Hall 2A</h6>
                      <a href="#" class="btn btn-primary me-3">View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                  </div>
                  </div>
              </div>

          {/* // Third movie */}
          <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/dr strange 2.jpg" className="card-imp-top" alt= "Doctor Strange: In The Multiverse Of Madness" />
                  <div className="card-body">
                      <h5 className="Doctor Strange: In The Multiverse Of Madness">Doctor Strange: In The Multiverse Of Madness</h5>
                      <h6>Show Time : 9.00 AM</h6>
                      <h6>Show Time : 1.00 PM</h6>
                      <h6>Show Time : 7.00 PM</h6> 
                      <h6>Hall 3A</h6>
                      <a href="#" class="btn btn-primary me-3" onClick={(Strange)}> View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                  </div>
                  </div>
              </div>


          {/* // forth movie */}
          <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/jersey.jpg" className="card-imp-top" alt= "Jersey" />
                  <div className="card-body">
                      <h5 className="Jersey">Jersey</h5>
                      <h6>Show Time : 11.00 AM</h6>
                      <h6>Show Time : 5.00 PM</h6>
                      <h6>Show Time : 9.00 PM</h6> 
                      <h6>Hall 1A</h6>
                      <a href="#" class="btn btn-primary me-3">View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                  </div>
                  </div>
              </div>


          {/* // fifth movie */}
          <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/Jurassix world.jpg" className="card-imp-top" alt= "Jurassic World: Dominion" />
                  <div className="card-body">
                      <h5 className="Jurassic World: Dominion">Jurassic World: Dominion</h5>
                      <h6>Show Time : 11.00 AM</h6>
                      <h6>Show Time : 5.00 PM</h6>
                      <h6>Show Time : 9.00 PM</h6>
                      <h6>Hall 2A</h6>
                      <a href="#" class="btn btn-primary me-3" > View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                  </div>
                  </div>
              </div>


          {/* // sixth movie */}
              <div className='col-md-4'>
                  <div className="card p-4">
                  <img src="./movieimages/Runway34.jpg" className="card-imp-top" alt= "Runway 34" />
                  <div className="card-body">
                      <h5 className="Runway 34">Runway 34</h5>
                      <h6>Show Time : 11.00 AM</h6>
                      <h6>Show Time : 5.00 PM</h6>
                      <h6>Show Time : 9.00 PM</h6>
                      <h6>Hall 3A</h6>
                      <a href="#" class="btn btn-primary me-3">View Details</a>
                      <a href="#" class="btn btn-primary me-3">Book Show</a>
                      
                  </div>
                  </div>
              </div>

          
        </div>
      </div>
    </div>
  )
}

export default ViewDetails
