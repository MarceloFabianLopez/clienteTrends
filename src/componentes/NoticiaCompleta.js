import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody'
//import Container from 'react-bootstrap/Container';
export default class NoticiaCompleta extends Component {
    
    
    render() {
        console.log(this.props.articulos);
            return (
                
            this.props.articulos.map((articulo,i) => {
                console.log('titulo:',articulo.title);
                                                    return(
                                                        
                                                            <div key={i}>
                                            
                                             <Toast >
                                                    <ToastHeader closeButton={false}>
                                                    <img src={articulo.image.imageUrl} alt="#" />
                                                         
                                                        </ToastHeader>
                                                        <ToastBody className="estiloToast">
                                                        {articulo.title}<br/>
                                                        {/* <small>{articulo.snippet}</small> */}
                                                        <a href={articulo.url}>
                                                        { articulo.image.source ? articulo.image.source: "#"}</a>
                                                        </ToastBody>

                                            </Toast>
                                                    
                                                            </div>
                                                            );
                                                        }
                                        )
            )
            }
                
    }

