import React, { useState } from 'react';

export default function ContadorHooks (){
    const [contador, setContador] = useState(0);
    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1);
    const alcuadrado = () => setContador(contador*contador);
    const iniciar = () => setContador (0);
     return(
         <>
            <h2>Hooks CONTADOR</h2>
            <p>{contador}</p>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={alcuadrado}>^2</button>
                <button onClick={iniciar}>0</button>
            </nav>
         </>
     );
 }