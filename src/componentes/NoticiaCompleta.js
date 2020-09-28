import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
export default class NoticiaCompleta extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
     <Container>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{this.props.titulo}</strong>
      <small>{this.props.fuente}</small>
    </Toast.Header>
    <Toast.Body>{this.props.copete}</Toast.Body>
  </Toast>
  </Container>           
  
    

            </div>
        )
    }
}
