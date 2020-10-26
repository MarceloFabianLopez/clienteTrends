import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MiComponente from './components/MiComponente';
import RealTimeComponent from './components/RealTimeComponent';
import DailyComponent from './components/DailyComponent';
import {Container} from 'react-bootstrap';
import HeaderComponent from './components/HeaderComponent';
//import TituloRealtime from './components/TituloRealtime';
// arreglado estilo y desacople de head en git 
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderComponent title="Tendenciero" logo="logo.png"/>
      
      </header>
      
      
        
        <DailyComponent/>

        <hr/>
        <h1>Tendencias momentaneas</h1>
        
          
        <RealTimeComponent/>
        
        <hr/>
        
     
    </div>
  );
}

export default App;
