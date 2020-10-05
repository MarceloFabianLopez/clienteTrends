import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import RealTimeComponent from './components/RealTimeComponent'
import {Container} from 'react-bootstrap';
//import TituloRealtime from './components/TituloRealtime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Tendenciero</h2>
             
      
      </header>
      
      
        <MiComponente/>
        <hr/>
        <h1>Tendencias momentaneas en tiempo real</h1>
        
          
        <RealTimeComponent/>
        
        <hr/>
        
     
    </div>
  );
}

export default App;
