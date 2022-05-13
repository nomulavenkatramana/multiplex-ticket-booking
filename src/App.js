import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import ShowDetails from './Component/Service/ShowDetails';
// import PublishShowComponent from './Component/PublishShowComponent';
import AddMovies from './Component/Service/AddMovies';

function App() {
  return (
     <div className="App">
       {/* <ShowDetails/> */}
      {/* <PublishShowComponent/> */}
      <AddMovies/>
    </div>
  );
}

export default App;
