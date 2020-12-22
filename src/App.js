import "./css/App.css";
import React from "react";
import NavBar from './Component/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from "./Component/carousels";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MyCarousel/>
    </div>
  );
}

export default App;
