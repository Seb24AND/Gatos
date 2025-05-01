import React from "react";
import "../../styles/GatosMainStyles/GatoBody.css";

import Banner1 from '../../assets/images/GatoIMG/BannerAlimentosGato.png';
import Banner2 from '../../assets/images/GatoIMG/BannerJuguetesGatos.jpg';
import Banner3 from '../../assets/images/GatoIMG/BannerAccesoriosGatos.jpg';

const Producto = ({ imagen, nombre, precio }) => (
  <div className="producto">
    <img src={imagen} alt={nombre} />
    <div className="info">
      <h3>{nombre}</h3>
      <p><strong>{precio}</strong></p>
    </div>
  </div>
);

const GatoBody = () => {
  return (
    <section id="categoria">
    {/*Alimentos*/}
      <img src={Banner1} alt="Banner Alimentos" className="banner-categoria" />
      <div className="fila-productos">
        <Producto imagen="../Imagenes/alimento1.png" nombre="Comida Premium" precio="S/ 50.00" />
        <Producto imagen="../Imagenes/alimento2.png" nombre="Snack Saludable" precio="S/ 15.00" />
        <Producto imagen="../Imagenes/alimento2.png" nombre="Snack Saludable" precio="S/ 15.00" />
        <Producto imagen="../Imagenes/alimento2.png" nombre="Snack Saludable" precio="S/ 15.00" />
        <Producto imagen="../Imagenes/alimento2.png" nombre="Snack Saludable" precio="S/ 15.00" />
        <Producto imagen="../Imagenes/alimento2.png" nombre="Snack Saludable" precio="S/ 15.00" />
        <a href="/accesorios-gato" className="mostrar-mas">
        Mostrar más... <span className="flecha">➜</span>   
        </a>
      </div>
    {/*Juguetes*/}
      <img src={Banner2} alt="Banner Juguetes" className="banner-categoria" />
      <div className="fila-productos">
        <Producto imagen="../Imagenes/juguete1.png" nombre="Ratón de Peluche" precio="S/ 10.00" />
      </div>
    {/*Accesorios*/}
      <img src={Banner3} alt="Banner Accesorios" className="banner-categoria" />
      <div className="fila-productos">
        <Producto imagen="../Imagenes/collar.png" nombre="Collar Antipulgas" precio="S/ 25.00" />
      </div>
    </section>
  );
}

export default GatoBody;
