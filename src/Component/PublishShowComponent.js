import React from 'react';
import PublishShowService from '../Service/PublishShowService';

class PublishShowComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            movies :[]
        }
    }

    componentDidMount(){
        PublishShowService.getAllMovies().then((response) =>{

            this.setState({getAllMovies: response.data})

        });
    }
        render(){
            return(
            <div>
                <h1 className='text-centre'>List of the Movies</h1>
                <table className='table table-striped'>
                <thead>
                        <tr>
                             <td>Movie ID</td>
                             <td>Movie Name</td>
                             <td>Hall</td>
                             <td>Time Slot</td>

                        </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.map(
                            user =>
                            <tr key={getAllMovies.movieId}>
                               
                                <td>getAllMovies.movieId</td>
                                <td>getAllMovies.movieName</td>
                                {/* <td>user.hall</td>
                                <td>user.time</td> */}

                            </tr>
                            
                            
                            )
                    }
                </tbody>

                </table>
            </div>
            )
        }
}
export default PublishShowComponent