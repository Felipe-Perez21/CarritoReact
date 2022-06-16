import React,{ useContext } from 'react';
import '../App.css';

import { Tiendacontext } from '../Context/Tiendacontext';

const Tienda = () =>{
    const {articulos, Agregar} = useContext(Tiendacontext);
    
    return(
        <div>
           <h2>Lista de productos</h2>
           {
            articulos.map((art,i)=>(
                <div key={i}>
                <p key={i+1}>{art.descripcion}</p>
                <img src={art.imgsrc} alt="x.x no hay imagen" width="100" height="100"/>
                <p key={i+2}>${art.precio}.00</p>
                <button onClick={()=>Agregar(art)}>Agregar a carrito (+)</button>
                
                </div>
            ))
           }       
        </div>
    )
}


export default Tienda;