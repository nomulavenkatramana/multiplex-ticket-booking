import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios'

const AddMovies = ()=>{
const[user , setuser] =useState ({
    movieid : "",
    movieName: "",   
    movie_Time : "",
    

});

    const{  movieId, movieName, movie_Time,}=user;

    const onInputChange = e =>{
        setuser({ ...user,[e.target.name]:e.target.value});
    };

        const onSubmit = async e =>{
            e.preventDefault();
            await axios.post("http://localhost:8080/addmovie",user)
            alert ('Movies Details Added')
        };


    return(
        <div className="container bg-light mt-4">
             <div class="row">
                 <div className="col-sm-4 mx-auto shadow p-5">
                     <h2 className="text-centre mb-4">Add Movie</h2>
                     <form onSubmit={e=> onSubmit(e)}>

                         <div className="form-group">
                             <input
                               type="text"
                               className="form-control form-control-lg"
                               placeholder="Enter Movie Id"
                               name="movieId"
                               value={movieId}
                               onChange={e=> onInputChange(e)}
                               />
                         </div>

                         <div className="form-group">
                             <input
                               type="text"
                               className="form-control form-control-lg"
                               placeholder="Enter Movie name"
                               name="movieName"
                               value={movieName}
                               onChange={e=> onInputChange(e)}
                               />
                         </div>

                         <div className="form-group">
                             <input
                               type="text"
                               className="form-control form-control-lg"
                               placeholder="Enter Movie Time"
                               name="movie_Time"
                               value={movie_Time}
                               onChange={e=> onInputChange(e)}
                               />
                         </div>

                         {/* <div className="form-group">
                             <input
                               type="text"
                               className="form-control form-control-lg"
                               placeholder="Enter Hall Id"
                               name="Hall_Id"
                               value={Hall_Id}
                               onChange={e=> onInputChange(e)}
                               />
                         </div> */}
                         <button className="btn btn-primary btn-block mt-3">Add Movies Details</button>
                     </form>
                 </div>
             </div>
        </div>


    )

}
    export default AddMovies;