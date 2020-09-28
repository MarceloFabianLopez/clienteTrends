import React from 'react';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import BotonNoticia from './BotonNoticia';
import './mysass.scss';
class CardNoticia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          }
      }  
    render() {
      return ( 
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <div className="tituloArticulo">
                        {this.props.titulo}
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={ this.props.articulosRelacionados[0].image ? this.props.articulosRelacionados[0].image.imageUrl:"/nodisponible.png"}/>
                
                  
                    <Card.Text>{this.props.copete}</Card.Text>
                    
                    <BotonNoticia/>
                    
                    
                      
                    
                    </Card>
              
              );
            }
  }
  export default CardNoticia;