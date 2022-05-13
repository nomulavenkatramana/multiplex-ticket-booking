import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EarningReport from './Components/EarningReport/EarningReport'
import Searchdata from './Components/SearchData/SearchData';
import AddMovies from './Component/Service/AddMovies';

function App() {
  return (
    <div className="App">
      <EarningReport />
      <Searchdata />
    <AddMovies/>
    </div>
  );
}

export default App;
