import React, { Component,useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
//import React, { useState } from 'react';
import NoticiaCompleta from './NoticiaCompleta'
function simulateNetworkRequest() {
    console.log("tardando....");
    
    return new Promise((resolve) => setTimeout(resolve, 2000));

  }
  function noticia() {
    console.log('noticia');
    return(<div><NoticiaCompleta/></div>);
      
  }
  
  function LoadingButton() {
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
        <>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Cargando…' : 'Click para ver'}
      </Button>
      {isLoading ? <NoticiaCompleta titulo='titulo' fuente='fuente' copete='copete'/> :''}
      </>
    );
  }
export default class BotonNoticia extends Component {
    render() {
        return (
            <div>
                <LoadingButton />
            </div>
        )
    }
}

