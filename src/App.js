import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/HomePage';

import Router from './Components/RouterComponent/Router'
import Login from './Components/Login/Login';

// import Login from './Components/Login/AdminLogin';
function App() {
  return (
    <div className="App">

      <Header />
      {/* <Login /> */}
      <Router />
      {/* <AdminLogin /> */}
      {/* <Header /> */}
      
  
    </div>
  );
}

export default App;
