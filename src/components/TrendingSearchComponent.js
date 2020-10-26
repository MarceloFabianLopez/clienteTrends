import React, { Component } from 'react';
//import { Card } from 'react-bootstrap';
//import ListGroupItem from 'react-bootstrap/ListGroupItem';
//import ListGroup from 'react-bootstrap/ListGroup';

export default class TrendingSearchComponent extends Component {
render() {
        let busquedas=this.props.cadadia;
        //let articulos = this.props.busqueda.articles;
        console.log('busquedas del dia :',busquedas.trendingSearches);
        return ( 
         
            <div>
                
                {busquedas.trendingSearches.map((trendingSearch,i) => {
                        console.log('una:',trendingSearch.articles);
                return (<div key={i}>
                    <div>{trendingSearch.title.query}</div>
                    {trendingSearch.articles.map((article,j) => {
                        console.log('titulo articulo',article.title);
                    return <div key={j}>{article.title}</div>
                    })}
                    </div>
                )
                })}
        
        </div>
        )
    }
}
