import React, { Component } from "react";
import ListaBusquedas from './ListaBusquedas';

class MiComponente extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "nada" ,
    data:null
    };
    }

    callAPI() {
        //fetch("http://192.168.0.9:5000/daily")
        fetch("https://still-plains-00092.herokuapp.com/daily")
        .then(response => response.json())
        .then(data => this.setState({ data }))
           
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        console.log('data',this.state.data);
    }

render(){

    console.log("aca");
    return this.state.data == null ?(<div>Cargando.......</div>)
    : (
   
    
      <div> ya cargo...
      {this.state.data[0]['formattedDate']}
      <ListaBusquedas  titulo="Titulo de la Lista de busquedas"
        nuevodato={this.state.data[0]}/>
    
            
           
     </div>
    )    
}

}

export default MiComponente;