import React from 'react';
import Reflux from 'reflux';
import DailyStore from '../stores/DailyStore';
import TrendingSearchComponent from './TrendingSearchComponent';
import Container from 'react-bootstrap/Container';

var createReactClass = require('create-react-class');

var DailyComponent = createReactClass({
  mixins: [Reflux.connect(DailyStore, 'dailystore')],

  render() {
    
     if (this.state.dailystore) {
       return (
         <div>
           <Container fluid>  
              <h4>Daylytrends</h4>
             
             <div className="box">
              { this.state.dailystore.map((a,i) => {// mapea los dias
                      return  <div key={i}>
                        <TrendingSearchComponent cadadia={a}/>
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

export default DailyComponent;