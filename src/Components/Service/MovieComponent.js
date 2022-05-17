import MovieService from  './MovieService';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';




function MovieComponent(props) {

    const[movie , setMovie] =useState ([]);
    
    // const[movieId, movieName]
       
    
    
    useEffect (()=>{
        MovieService()
    },[])

    return () => {
            <div>
                <h1 className="text-center"> Movie List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                             <td> Movie Id</td>
                              <td> Movie Name </td>
                            
                         </tr>
                    </thead>
                    <tbody>
                        {
                           movie && movie.length > 0 && movie.map((movie)=>(
                            <div className='col-md-3'>
                            <Link className='text-dec'to={`/MovieComponent/${movie.movieId}`}>
                            <div className="card p-4">
                            {/* <img src = {}className="card-img-top "alt={product.title}/> */}
                            <div className="card-body">
                            <h5 className="card-title">{movie.movieName}</h5>
                            <h3>Id : ${movie.movieId}</h3>
                            {/* <p className="card-text">{product.category}</p> */}
                            </div>
                            </div>
                            </Link>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div> 
        };
        
    }
export default MovieComponent;