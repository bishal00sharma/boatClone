import { Routes } from 'react-router-dom';
import './App.css';
import Caro1 from "./Components/Caro/Caro1";
import Products from "./Components/Headphones/Products";
import MainBox from './Components/Navbar/MainBox';
import { Login } from './Pages/Login';
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div className="App">
      <AllRoutes />
   
  
    </div>
  );
}

export default App;
