import './App.css';
import Home from './Component/Home/Home'
import RoutesComp from './Component/RoutesComponent/RoutesComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Service/Header/Header';
import Router from './Components/RouterComponent/Router'
import AddMovies from './Component/Service/AddMovies';
import EarningReport from './Components/EarningReport/EarningReport'
import Searchdata from './Components/SearchData/SearchData';


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Home />
      <RoutesComp />
      <EarningReport />
      <Searchdata />
    <AddMovies/>
    </div>
  );
}

export default App;
