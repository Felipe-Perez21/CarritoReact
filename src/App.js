import React from 'react'
import './App.css';
import Tienda from './Componentes/Tienda'
import Carrito from './Componentes/Carrito';

import Tiendaprovider from './Context/Tiendacontext';

function App() {
  return (
    <Tiendaprovider>
      <div className='componentes'>
        <Tienda/>
        <Carrito/>
      </div>
    </Tiendaprovider>
  );
}

export default App;
