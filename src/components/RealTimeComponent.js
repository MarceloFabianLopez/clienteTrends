import React from 'react';
import Reflux from 'reflux';
import RealTimeStore from '../stores/RealTimeStore';
import RtmComponent from './RtmComponent';
import Container from 'react-bootstrap/Container';
//import TituloRealtime from './TituloRealtime';
//import Container from 'react-bootstrap/Container';
//import { Container } from "react-bootstrap"
var createReactClass = require('create-react-class');
//let?

//var ImageGrid = createReactClass({
//  mixins: [Reflux.connect(ImageStore, 'imagestore')],
var RealTimeComponent = createReactClass({
  mixins: [Reflux.connect(RealTimeStore, 'realtimestore')],

  render() {
    
     if (this.state.realtimestore) {
       return (
         <div>
              <h4>Realtimetrends</h4>
             
             
              { this.state.realtimestore.map((a,i) => {
                      return  <div className='box'key={i}>
                        <RtmComponent busqueda={a}/>
                        </div>
                        })               
              }
             
              </div>
          
      )
      }
     
    
    else { return (<h4>cargando....</h4>);}
}


});
//module.exports = RealTimeComponent;
export default RealTimeComponent;