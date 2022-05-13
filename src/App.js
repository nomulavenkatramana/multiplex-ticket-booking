import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EarningReport from './Components/EarningReport/EarningReport'
import Searchdata from './Components/SearchData/SearchData';

function App() {
  return (
    <div className="App">
      <EarningReport />
      <Searchdata />
    </div>
  );
}

export default App;
