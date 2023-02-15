import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Gotomenu from "./Gotomenu";
import Signup from "./Signup";
import Layout from "./Layout";
import NoPage from "./NoPage";
import FoodItems from "./FoodItems";
import Navbar from "./Navbar";


function App() {
  return (
  < BrowserRouter >

  <Routes>
    
    <Route path="/" elements={<Layout />}/>
    <Route index element={<Gotomenu/>}/>
    <Route path="Login" elements={<Login />}/>
    <Route path="Signup" elements={<Signup />}/>
    <Route path="*" elements={<NoPage />}/>
    <Route path="FoodItems" elements={<FoodItems />}/>
    <Route path="Navbar" elements={<Navbar />}/>
    
    <Route/> 

  </Routes >

  </BrowserRouter >
  );
}

export default App;