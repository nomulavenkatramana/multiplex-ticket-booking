import axios from "axios";

const USER_REST_API_URL ='http://localhost:8080/api/getAllMovies';
 class PublishShowService{

    getAllMovies(){
          axios.get(USER_REST_API_URL);
      }
 }

  export default new PublishShowService()