import React from 'react';
import Reflux from 'reflux';
import RealTimeStore from '../stores/RealTimeStore';
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
         <h4>Adentroooo</h4>

       { this.state.realtimestore.map((a,i) => {
       return   <div key={i}>
                  <h5>{a.title}</h5>
                  <ul>
                  {a.articles.map((articulo,indice)=>{
                    return <li key={indice}>
                    {articulo.articleTitle}</li>
                  })
                  
                
                }
                </ul>
                </div>

       
                    
             }
                  )               
       }
       </div>
      )
      }
     
    
    else { return (<h4>cargando....</h4>);}
}


});
//module.exports = RealTimeComponent;
export default RealTimeComponent;