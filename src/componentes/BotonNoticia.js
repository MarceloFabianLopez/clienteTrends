import React, { Component,useState,useEffect,Fragment} from 'react'
import {Button} from 'react-bootstrap';
//import React, { useState } from 'react';
import NoticiaCompleta from './NoticiaCompleta'
function simulateNetworkRequest() {
    console.log("tardando....");
    
    return new Promise((resolve) => setTimeout(resolve, 9000));

  }
  /* function miArticulo() {
      const [articulo,setArticulo]= useState(null);
    console.log('articulo para noticia');
    
    return(articulo);
      
  } */
  
  function LoadingButton(props) {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
           // noticia();
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
  
    return (
        <Fragment>
        
      <Button
        variant="info"
        size ="sm"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Articulos' : 'Ver'}
      </Button>
      {isLoading ? <NoticiaCompleta articulos={props.articulos} /> :''}
      </Fragment>
    );
  }
export default class BotonNoticia extends Component {
    render() {
      //let art=props.articulos;
        console.log('dentro render boton noticia',this.props.articulos);
        return (
            <div>
                <LoadingButton articulos={this.props.articulos} />
            </div>
        )
    }
}

