import React,{createContext, useState} from 'react';

export const Tiendacontext = createContext();

const Tiendaprovider = (props) =>{
    const [articulos, setarticulos] = useState([
        {id:1,descripcion:"Camara Polaroid",precio:20,cantidad:0,imgsrc:"https://tiendainstant.com/1430-home_default/polaroid-600-square.jpg"},
        {id:2,descripcion:"Impresora digital",precio:10,cantidad:0,imgsrc:"https://target.scene7.com/is/image/Target/GUEST_5bd93635-e33a-4ca4-be2b-cd8e45a8108a?wid=488&hei=488&fmt=pjpeg"},
        {id:3,descripcion:"Televisor HD",precio:50,cantidad:0,imgsrc:"https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg"},
    ]);
    
    const [carrito, setcarrito] = useState([]);

    const [total, settotal] = useState(0)

    const Agregar = (_art) =>{
        const existe = carrito.find(a=>a.id===_art.id);
        console.log(existe)
       
        if(existe !== undefined){
            console.log("Repetido")

            let array_filtrado = carrito.filter(a=>a.id!==_art.id)
            console.log(array_filtrado)

            let temp_obj = {
                id: _art.id,
                descripcion: _art.descripcion,
                precio: _art.precio,
                cantidad: existe.cantidad+1
            }

            let array_bueno = array_filtrado.concat(temp_obj)

            console.log(array_bueno)

            let total_local = total + _art.precio
            settotal(total_local)

            setcarrito(array_bueno)
            
        }
        else{
            console.log("Primera vez")

            let temp_obj = {
                id: _art.id,
                descripcion: _art.descripcion,
                precio: _art.precio,
                cantidad: 1
            }

            console.log(temp_obj)
            let nuevoarr = carrito.concat(temp_obj)

            console.log(nuevoarr)

            let total_local = total + _art.precio
            
            setcarrito(nuevoarr)
            settotal(total_local)
        }
    }

    const Eliminar = (_art) =>{
        const existe = carrito.find(a=>a.id===_art.id);

        if(existe.cantidad > 1){
            console.log("Repetido")

            let array_filtrado = carrito.filter(a=>a.id!==_art.id)
            console.log(array_filtrado)

            let temp_obj = {
                id: _art.id,
                descripcion: _art.descripcion,
                precio: _art.precio,
                cantidad: existe.cantidad-1
            }

            let array_bueno = array_filtrado.concat(temp_obj)

            console.log(array_bueno)
            
            let total_local = total - _art.precio
            settotal(total_local)

            setcarrito(array_bueno)
        }
        else{
            let array_filtrado = carrito.filter(a=>a.id!==_art.id)
            let total_local = total - _art.precio
            settotal(total_local)
            setcarrito(array_filtrado)
        }
    }

    return(
        <Tiendacontext.Provider value={{
            articulos,
            carrito,
            total,
            Agregar,
            Eliminar
        }}>
            {props.children}
        </Tiendacontext.Provider>
    )
}

export default Tiendaprovider;