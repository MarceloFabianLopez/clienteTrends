import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default class CarrouselComponent extends Component {
    render() {
        return (
            <div>
              <Carousel>
  <Carousel.Item key={this.props.id}>
    <img
      className="d-block w-100"
      src={this.props.imagen}
      alt="Primer imágen"
    />
    <Carousel.Caption>
        <h3>{this.props.titulo}</h3>
        <p>{this.props.cuerpo}</p>
        <p><a href={this.props.enlace} target _blank noopener noreferrer>Ver</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>  
            </div>
        )
    }
}
