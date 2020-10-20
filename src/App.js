import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import WeatherCard from "./Components/WeatherCard";
//import TrailCard from "./Components/TrailCard";
import FormContainer from "./Components/FormContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <Footer />
    </div>
  );
}

export default App;
