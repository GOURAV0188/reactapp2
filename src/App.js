import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Components/Register";
import { ProtectedRoutes } from "./Services/ProtectedRoutes";


function App() {
  return (
    <>
    
<BrowserRouter  basename='/reactapp2'>

<Routes>

<Route path="/reactapp2"    element={<ProtectedRoutes />} />
<Route  path="/reactapp2"  element={<Home />} />

<Route  path="/login"  element={<Login />} />
<Route path="/register" element= {<Register/>} />



</Routes>


</BrowserRouter>



</>


  );
}

export default App;
