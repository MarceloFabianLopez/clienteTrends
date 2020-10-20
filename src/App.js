import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import MiComponente from './components/MiComponente';
import RealTimeComponent from './components/RealTimeComponent';
import DailyComponent from './components/DailyComponent';
//import {Container} from 'react-bootstrap';
//import TituloRealtime from './components/TituloRealtime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Tendenciero</h2>
             
      
      </header>
      
      
        {/* <MiComponente/> */}
        <DailyComponent/>

        <hr/>
        <h1>Tendencias momentaneas</h1>
        
          
        <RealTimeComponent/>
        
        <hr/>
        
     
    </div>
  );
}

export default App;
