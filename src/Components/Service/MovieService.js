import axios from 'axios'

const USERS_REST_API_URL='http://localhost:8080/getAllMovies';

// class MovieService{
//     getMovie (){
//        return axios.get(USERS_REST_API_URL);
//     }
// }
const MovieService= async()=> {
   const {data}= await axios.get(USERS_REST_API_URL);
//    setMovie(data);
  console.log(data)
  }

export default MovieService;