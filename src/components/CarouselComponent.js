import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default class CarrouselComponent extends Component {
    render() {
        return (
            <div>
              <Carousel>

              {
              this.props.articulos.map((articulo,j) => {
             return ( 
                <Carousel.Item key={j}>
                  <img className="d-block w-100" src={articulo.image ? articulo.image.imageUrl :"/nodisponible.png"} alt="Primer imágen"/>
                  <Carousel.Caption>
                    <h3>{articulo.title.query}</h3>
                    <p>{articulo.snippet}</p>
                    <p><a href={articulo.url} target _blank noopener noreferrer>Ver</a></p>
                  </Carousel.Caption>
                </Carousel.Item>)
                                })
                  }
              </Carousel>  
            </div>
        )
    }
}
