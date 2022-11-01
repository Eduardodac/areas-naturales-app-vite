import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import GaleryRowCuxtal from '../components/elementos/GaleryRowCuxtal';
import GaleryRowTehuacan from '../components/elementos/GaleryRowTehuacan';
import { grupoFotos1, grupoFotos2 } from '../components/galeria/GaleryItems';

const Galeria = () => {
    const [galeria, setGaleria] = useState('1');
    const [fotos, setFotos] = useState(grupoFotos1)

    const galeriaItems = [
        {label: 'Galería: Cuxtal', value: '1'},
        {label: 'Galería: Tehuacan', value: '2'},
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

      const Galeria = () => {
            return galeria==='1' ? (<GaleryRowCuxtal imagenes = {fotos}></GaleryRowCuxtal>) : (<GaleryRowTehuacan imagenes = {fotos}></GaleryRowTehuacan>)
      }

    return (
        <div className=' h-full w-full'>
            
            <Dropdown 
                className='w-1/2 my-5 mx-14 ring-green-400'
                value={galeria} 
                options={galeriaItems} 
                onChange={(e) => setGaleria(e.value)} 
                placeholder="Galería: Cuxtal"/>

            {Galeria()}

            {/* <GaleryRow></GaleryRow> */}
 
        </div>
    );
};

export default Galeria;