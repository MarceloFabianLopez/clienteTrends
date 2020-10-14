import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

export default class RtmComponent extends Component {
    render() {
        let unabusqueda=this.props.busqueda;
        let articulos = this.props.busqueda.articles;
        return (
        <Card style={{ width: '9rem' }}>
            <Card.Img variant="top" src={unabusqueda.image.imgUrl} />
            <Card.Body>
                <Card.Title>{unabusqueda.entityNames[0].replace(/&quot;|&#39;/g,'"')}</Card.Title>
                <Card.Text>
                {unabusqueda.source}
                {unabusqueda.time}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {articulos.map((articulo,i) => {
                   return  <ListGroupItem key={i}><small>{articulo.articleTitle.replace(/&quot;|&#39;/g,'"')}</small>
                   <br/><a href={articulo.url} rel="noopener noreferrer" target="_blank">{articulo.source.replace(/&quot;|&#39;/g,'"')}</a>
                   </ListGroupItem>

                })}
                
            </ListGroup>
            
        </Card>
        )
    }
}
