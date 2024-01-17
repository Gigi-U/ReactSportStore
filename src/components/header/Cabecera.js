import React from 'react'
import banner from "../../assets/img/banner.png"

const Cabecera = (props)=> {

  return (
    <header style={{backgroundColor:"transparent"}}>  
      <div>  
        <section>
          <img                                        
              style={{ width: "100%"}}
              src={banner} 
              alt='banner'          
          />
        </section>
        <h1 style={{fontSize:"25px"}}>Carrito de Compras</h1>
        <p> Cantidad de productos 
          <span style={{marginLeft:"10px", fontSize:"14px"}}>{props.elementosComprados}</span>
        </p>          
      </div>
    </header>
  )
  
};

export default Cabecera;