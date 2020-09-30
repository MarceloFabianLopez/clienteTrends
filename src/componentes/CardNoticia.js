import React from 'react';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import BotonNoticia from './BotonNoticia';
import './mysass.scss';

function buscarImagen(articulo){

  if (articulo.image!==undefined) {return true}
  else {return false}
}
function dameIndiceImagen(articulos){
  return articulos.findIndex(buscarImagen);
}
//function  consigoImagen (articulos)   {
 //recorre los articulos hasta encontrar una imagen, si no hay ninguna devuelve no disponible
//const existeImage = (articulo) => {articulo.image !== undefined}
//articulos.some(consigoImagen);
 //let unaImagen ="/nodisponible.png";

 // articulos.map((art,i)=>{
 //   art.image ? unaImagen=art.image.imageUrl:unaImagen="/nodisponible.png"
 //   if (unaImagen!=="/nodisponible.png") { 
      //console.log(art.title);
      //console.log('art:',art);
      
 //     }
 // });
//return unaImagen;
//}
class CardNoticia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          }
      }  
    render() {
      //console.log('en',this.props.titulo);
      //console.log('imag correcta:',dameIndiceImagen(this.props.articulosRelacionados));
      let indice = dameIndiceImagen(this.props.articulosRelacionados);
      
      let unaImagen= indice!==-1 ? this.props.articulosRelacionados[indice].image.imageUrl:"/nodisponible.png";
      return ( 
                <Card style={{ width: '10rem' }}>
                    <Card.Header>
                        <div className="tituloArticulo">
                        {this.props.titulo}
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={ unaImagen?unaImagen:"/nodisponible.png"} alt="#"/>
                
                  
                    <Card.Text>Tráfico:{this.props.trafico}<br/>
                    Artículos : {this.props.articulosRelacionados.length}
                    </Card.Text>
                    
                    <BotonNoticia articulos={this.props.articulosRelacionados} />
                    
                    
                      
                    
                    </Card>
              
              );
            }
  }
  export default CardNoticia;