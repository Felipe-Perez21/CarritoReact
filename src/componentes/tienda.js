import React,{ useContext } from 'react';
import '../App.css';

import { Button, Card } from 'react-bootstrap';

import { Tiendacontext } from '../Context/Tiendacontext';

const Tienda = () =>{
    const {articulos, Agregar} = useContext(Tiendacontext);

    return(
        <div>
           <h2>Lista de productos</h2>
           <div className='listado_articulos'>
           {
            articulos.map((art,i)=>(
                <div key={i} >
                <Card style={{width: '12rem'}}>
                <Card.Title>{art.descripcion}</Card.Title>
                {/* <p key={i+1}>{art.descripcion}</p> */}
                {/* <img src={art.imgsrc} alt="x.x no hay imagen" width="100" height="100"/> */}
                <Card.Img variant="top" src={art.imgsrc} className='imagen'/>
                <p key={i+2}>${art.precio}.00</p>
                <Button variant="success" onClick={()=>Agregar(art)}>Agregar a carrito (+)</Button>
                </Card>
                </div>
            ))
           }
           </div>
        </div>
    )
}


export default Tienda;