import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
//import Badge from 'react-bootstrap/Badge';

import './mysass.scss';
class CardArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          }
      }  
    render() {
      return ( <Container>
                <Card>
                    <Card.Header>
                        <div className="tituloArticulo">
                        {this.props.titulo}
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={ this.props.articulosRelacionados[0].image ? this.props.articulosRelacionados[0].image.imageUrl:"/nodisponible.png"}/>
                
                    <ListGroup className="list-group-flush">
                        {this.props.articulosRelacionados.map((articulo,i) =>{
                        return (
                        <ListGroupItem key={i}><div className="enlaceMedios">
                            <a href={articulo.url} rel="noopener noreferrer">{articulo.source}</a></div>
                        </ListGroupItem>);
                        }
                        )
                        }
                    </ListGroup>
                  </Card>
              </Container>
              );
            }
  }
  export default CardArticle;