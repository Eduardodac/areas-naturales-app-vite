import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Boton from '../elementos/Boton';

const Galeria = () => {
    const [galeria, setGaleria] = useState('1');

    const galeriaItems = [
        {label: 'Primera Galería', value: '1'},
        {label: 'Segunda Galería', value: '2'},

    ];

    useEffect(() =>{
        document.title= `Galería`
      }, []);

    return (
        <div>
            
            <Dropdown 
                className='w-1/2 my-5 mx-14 ring-green-400'
                value={galeria} 
                options={galeriaItems} 
                onChange={(e) => setGaleria(e.value)} 
                placeholder="Primera Galería"/>
 
        </div>
    );
};

export default Galeria;