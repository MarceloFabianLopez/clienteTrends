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
           <Container fluid>  
              <h4>Realtimetrends</h4>
             
             <div className="box">
              { this.state.realtimestore.map((a,i) => {
                      return  <div key={i}>
                        <RtmComponent busqueda={a}/>
                        </div>
                        })               
              }
             
              </div>
              </Container>
          </div>
      )
      }
     
    
    else { return (<h4>cargando....</h4>);}
}


});
//module.exports = RealTimeComponent;
export default RealTimeComponent;