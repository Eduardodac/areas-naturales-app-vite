import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import GaleryRow from '../components/elementos/GaleryRow';
import { grupoFotos1, grupoFotos2 } from '../components/galeria/GaleryItems';

const Galeria = () => {
    const [galeria, setGaleria] = useState('1');
    const [fotos, setFotos] = useState(grupoFotos1)

    const galeriaItems = [
        {label: 'Primera Galería', value: '1'},
        {label: 'Segunda Galería', value: '2'},
    ];

    useEffect(() =>{
        document.title= `Galería`
      }, []);

      useEffect(() =>{
        if (galeria === '1'){
            setFotos(grupoFotos1)
        }else{
            setFotos(grupoFotos2)
        }
      }, [galeria]);

    return (
        <div className='bg-slate-200 h-full w-full'>
            
            <Dropdown 
                className='w-1/2 my-5 mx-14 ring-green-400'
                value={galeria} 
                options={galeriaItems} 
                onChange={(e) => setGaleria(e.value)} 
                placeholder="Primera Galería"/>

            <GaleryRow imagenes = {fotos}></GaleryRow>
            {/* <GaleryRow></GaleryRow> */}
 
        </div>
    );
};

export default Galeria;