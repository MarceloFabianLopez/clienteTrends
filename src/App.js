import React from 'react';
//import logo from './logo.svg';
import './App.css';
import RealTimeComponent from './components/RealTimeComponent';
import DailyComponent from './components/DailyComponent';
import './components/mysass.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Tendenciero</h2>
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
