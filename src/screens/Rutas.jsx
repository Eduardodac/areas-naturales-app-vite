import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import ruta_baltica from "../assets/img/rutas/ruta_baltica.jpg";
import ruta_mexpue from "../assets/img/rutas/ruta_mexpue.jpg";
import ruta_panam from "../assets/img/rutas/ruta_panam.jpg";

const Rutas = () => {

    const [rutas, setRutas] = useState(ruta_panam);

    const rutasItems = [
        {label: 'Ruta Báltica', value: ruta_baltica},
        {label: 'Ruta Mexico-Publa', value: ruta_mexpue},
        {label: 'Ruta Panamericana', value: ruta_panam},

    ];

    useEffect(() =>{
        document.title= `Rutas`;
      }, []);

    return (
        <>
            <div className='bg-slate-200 h-screen'>
                <Dropdown 
                    className='w-1/2 my-5 mx-14 ring-green-400'
                    value={rutas} 
                    options={rutasItems} 
                    onChange={(e) => setRutas(e.value)} 
                    placeholder="Selecciona una Ruta"
                />
                <div className='flex flex-row justify-center h-auto items-center w-64 md:w-96 mx-auto p-auto'>
                    <img className= "" src={rutas}></img>
                </div>
            </div>
        </>
    );
};

export default Rutas;