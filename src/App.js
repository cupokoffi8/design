import React from "react"; 
import Header from './Components/Header'; 
import Features from './Components/Features'; 
import Services from "./Components/Services"; 
import Design from "./Components/Design"; 
import Contact from "./Components/Contact-Us/Contact-Us"; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <Features /> 
      <Services /> 
      <Design /> 
      <Contact /> 
    </div>
  );
}

export default App;
