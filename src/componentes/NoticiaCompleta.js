import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody'
//import Container from 'react-bootstrap/Container';
export default class NoticiaCompleta extends Component {
    
    
    render() {
        let titulo="";
        //console.log(this.props.articulos);
            return (
               // &#39;Bi&#39;:
            this.props.articulos.map((articulo,i) => {
          //      console.log('titulo:',articulo.title);
                titulo=articulo.title.replace(/&quot;/g,'"');
                titulo=titulo.replace(/&#39;/g,"'");
               return(
                <div key={i}>
                    <Toast >
                    <ToastHeader closeButton={false}>
                    <img src={articulo.image ? articulo.image.imageUrl :"/nodisponible.png"} alt="#" className="estiloImagen"/>
                    </ToastHeader>
                    <ToastBody className="estiloToast">
                    {titulo}<br/>
                    {/* <small>{articulo.snippet}</small> */}
                    <a href={articulo.url} target='_blank' rel="noopener noreferrer">
                    { articulo.image ? articulo.image.source: articulo.source}</a>
                    </ToastBody>
                    </Toast>
                </div>
                        );
        }

                                        )
            )
            }
                
    }

