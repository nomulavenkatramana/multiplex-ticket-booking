import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Service/Header/Header';
// import EarningReport from './Components/EarningReport/EarningReport'
// import Searchdata from './Components/SearchData/SearchData';
// import AddMovies from './Components/AddingMovies/AddMovies';
import Router from './Components/RouterComponent/Router'


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
   
    </div>
  );
}

export default App;
