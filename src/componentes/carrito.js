import React,{ useContext } from 'react';
import '../App.css';

import {Tiendacontext} from '../Context/Tiendacontext';

import { Button } from 'react-bootstrap';

export default function Carrito(){
    const { carrito,total, Eliminar} = useContext(Tiendacontext);

    return(
        <div className='listado-carrito'>
            {
               carrito.length===0
               ?
               <div>
                    <h2>Tu carrito esta vacio</h2>
                    <img src='https://paisajesespanoles.es/images/emptycart.png' alt='Tu carrito esta vacio :(' width="400" height="300"
                    />
               </div>
               :
               <div>
                    <h2>Mi carrito</h2>
                    {
                        carrito.map((art,i)=>(
                            <div key={i}>
                                <p key={i+2}>{art.descripcion}</p>
                                <p key={i+3}>x{art.cantidad}</p>
                                <Button variant="danger" onClick={()=>Eliminar(art)}>Sacar del carrito (-)</Button>
                            </div>
                        ))
                    }
                    <h2>Total ${total}.00</h2>
                   
                </div>
            }       
        </div>
    )
}


