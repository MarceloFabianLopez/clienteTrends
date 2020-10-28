import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';
//import ListGroup from 'react-bootstrap/ListGroup';
import CarouselComponent from './CarouselComponent';
export default class TrendingSearchComponent extends Component {
render() {
        let busquedas=this.props.cadadia;
        //let articulos = this.props.busqueda.articles;
        console.log('busquedas del dia :',busquedas.trendingSearches);
        return ( 
         
            <div className='box'>
              
                {busquedas.trendingSearches.map((trendingSearch,i) => {
                        console.log('una:',trendingSearch.articles);
                return (<div key={i}>
                        <Card  border="light" style={{ width: '12rem' }}>
                        <Card.Img variant="top" src={trendingSearch.image.imageUrl} />
                        <Card.Body>
                        <Card.Title>{trendingSearch.title.query}</Card.Title>
                        <Card.Text>
                            {trendingSearch.articles[0].title}
                         {trendingSearch.articles.map((article,j) => {
                             return <div key={j}>
                             <CarouselComponent id={j}
                             titulo={article.title.query}
                             imagen={article.image[imageUrl]}
                             cuerpo={article.snippet}
                             enlace={article.url}
                             />
                                </div>
                                })} 
                        </Card.Text>
                        </Card.Body>
                            <Card.Link href={trendingSearch.shareUrl}>Ver</Card.Link>
                        <Card.Footer>
                            <small className="text-muted">{trendingSearch.formattedTraffic}</small>
                        </Card.Footer>
                        </Card>




                   
              
                    </div>
                )
                })}
        
        </div>
        )
    }
}
