import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewDetails from './Components/Service/ViewDetails';
import MovieDetails from'./Details/MovieDetails';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
    <div className='App'>
      <NavBar/>
      <ViewDetails/>
      <MovieDetails/>
      <footer/>
    </div> 
      </>
    );
    }
  
export default App;
