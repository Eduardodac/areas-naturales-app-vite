import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Boton from '../elementos/Boton';
import GaleryCard from '../elementos/GaleryCard';
import GaleryRow from '../elementos/GaleryRow';
import img1 from "../../assets/img/galeria/1.jpg"
import img2 from "../../assets/img/galeria/2.jpg"
import img3 from "../../assets/img/galeria/3.jpg"
import img4 from "../../assets/img/galeria/4.jpg"
import img5 from "../../assets/img/galeria/5.jpg"
import img6 from "../../assets/img/galeria/6.jpg"
import img7 from "../../assets/img/galeria/7.jpg"
import img8 from "../../assets/img/galeria/8.jpg"
import img9 from "../../assets/img/galeria/9.jpg"
import img10 from "../../assets/img/galeria/10.jpg"
import img11 from "../../assets/img/galeria/11.jpg"
import img12 from "../../assets/img/galeria/12.jpg"
import img13 from "../../assets/img/galeria/13.jpg"
import img14 from "../../assets/img/galeria/14.jpg"
import img15 from "../../assets/img/galeria/15.jpg"
import img16 from "../../assets/img/galeria/16.jpg"

const grupoFotos1 = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    img7: img7,
    img8: img8,
}

const grupoFotos2 = {
    img1: img9,
    img2: img10,
    img3: img11,
    img4: img12,
    img5: img13,
    img6: img14,
    img7: img15,
    img8: img16,
}


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