import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import ruta_Cuxtal from "../assets/img/rutas/ruta_Cuxtal.png";
import ruta_Tehuacan from "../assets/img/rutas/ruta_Tehuacan.png";


const Rutas = () => {

    const [rutas, setRutas] = useState(ruta_Cuxtal);

    const rutasItems = [
        {label: 'Ruta Cuxtal', value: ruta_Cuxtal},
        {label: 'Ruta Tehuacan', value: ruta_Tehuacan},

    ];

    useEffect(() =>{
        document.title= `Rutas`;
      }, []);

    return (
        <>
            <div className=' h-screen'>
                <Dropdown 
                    className='w-1/2 my-5 mx-14 ring-green-400'
                    value={rutas} 
                    options={rutasItems} 
                    onChange={(e) => setRutas(e.value)} 
                    placeholder="Selecciona una Ruta"
                />
                <div className='items-center w-96 md:w-175 mx-auto p-auto'>
                    <img className= "" src={rutas}></img>
                </div>
            </div>
        </>
    );
};

export default Rutas;