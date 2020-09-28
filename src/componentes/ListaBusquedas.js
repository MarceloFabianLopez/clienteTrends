import React from 'react';
import CardNoticia from './CardNoticia';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

class ListaBusquedas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          minuevodato: {}
        }
      }   
    
      
    render() 
    {   let arreglo=null;
        arreglo=this.props.nuevodato;

            if (arreglo) {
                console.log("areglando",arreglo);
            return (
            <div>
                <div>Dia {arreglo['formattedDate']}</div>
                <div className="box">
                         
                        
                        

                            {
               
                            arreglo.trendingSearches.map((trendingSearch,i)=>{
                                        return (
                                            

                                            <CardNoticia titulo={trendingSearch.title.query} key={i} enlace={trendingSearch.image.newsUrl} 
                                            imagen={trendingSearch.image.imageUrl} 
                                            copete={trendingSearch.articles[0].snippet} 
                                            articulosRelacionados={trendingSearch.articles}/>
                                            
                                            );
                                            

                                        })
                 
                             }
       
                      
                </div>
                </div>
                );




        } else {return (<div>Esperando la carroza</div>)}

        }

        componentDidMount() {  
        
        }   
        
        

    
}
  export default ListaBusquedas;

 