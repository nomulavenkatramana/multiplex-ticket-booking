import React from "react";


function ShowDetails() {

    


  return (
     {/* // Third movie */}
    <div className="container py-5">
      <div className='row'>
        <img src="./movieimages/DrStrange.jpg" className="card-imp-top" alt= "Doctor Strange: In The Multiverse Of Madness" />
            <div className='col-md-4'>
              <div className="card p-4">
                <div className="card-body">
                  <h6>Cast:Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor,	Benedict Wong, Xochitl Gomez,	Rachel McAdams</h6>
                  <h6>English,Hindi,Kannada,Malayalam,Tamil,Telugu</h6>
                  <h6>2h 6m•Action,Adventure,Fantasy•UA•6 May, 2022</h6>
                  <link href="https://www.youtube.com/results?search_query=dr.strange+2+trailer"
                    class="btn btn-primary me-3">Movie trailer</link>
                </div>
              </div>
            </div>;
          </div>
      </div>

  );
}

export default ShowDetails;