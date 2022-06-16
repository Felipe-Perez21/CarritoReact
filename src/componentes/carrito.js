import React,{ useContext } from 'react';
import '../App.css';

import {Tiendacontext} from '../Context/Tiendacontext';

export default function Carrito(){
    const { carrito,total, Eliminar} = useContext(Tiendacontext);

    return(
        <div>
            {
               carrito.length===0
               ?
               <div>
                    <h2>Tu carrito esta vacio</h2>
                    <img src='https://paisajesespanoles.es/images/emptycart.png' alt='Tu carrito esta vacio :(' 
                    />
               </div>
               :
               <div>
                    <h2>Mi carrito</h2>
                    {
                        carrito.map((art,i)=>(
                            <div key={i}>
                                <p key={i+2}>{art.descripcion}</p>
                                <p key={i+3}>{art.cantidad}</p>
                                <button onClick={()=>Eliminar(art)}>Sacar del carrito (-)</button>
                            </div>
                        ))
                    }
                    <h2>Total ${total}.00</h2>
                   
                </div>
            }       
        </div>
    )
}


