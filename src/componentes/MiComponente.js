import React, { Component } from "react";
import ListaBusquedas from './ListaBusquedas';
import Spinner from 'react-bootstrap/Spinner'
import { Container } from "react-bootstrap";
/* function myTimeout1() {
    document.getElementById("root").innerHTML = "Cargando...";
  } */
class MiComponente extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "nada" ,
    data:null
    };
    }

    callAPI() {
        //fetch("http://192.168.0.9:5000/daily")
        //setTimeout(myTimeout1,4000);
        fetch("https://still-plains-00092.herokuapp.com/daily")
        .then(response => response.json())
        .then(data => this.setState({ data }))
           
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        //console.log('data',this.state.data);
    }

render(){

    //console.log("aca");
    return this.state.data == null ?(<div>
        Cargando ....
        <Spinner animation="border" /></div>)
    : (
   
    
      <div> 
          {this.state.data.map((undato,i)=> {
              return (
                  <div key={i}>
                    <Container fluid>  
                      {/*{undato['formattedDate']}*/}
              {/*console.log('data',this.state.data)*/}
                      <ListaBusquedas  titulo="Titulo de la Lista de busquedas"
                        nuevodato={undato}/>
                    </Container>
                  </div>
              );
          })}
    
     </div>
    )    
}

}

export default MiComponente;