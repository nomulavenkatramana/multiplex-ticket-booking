import './App.css';
import Home from './Component/Home/Home'
import RoutesComp from './Component/RoutesComponent/RoutesComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import EarningReport from './Components/EarningReport/EarningReport'
import Searchdata from './Components/SearchData/SearchData';
import AddMovies from './Component/Service/AddMovies';


function App() {
  return (
    <div className="App">
      <Home />
      <RoutesComp />
      <EarningReport />
      <Searchdata />
    <AddMovies/>

    </div>
  );
}

export default App;
