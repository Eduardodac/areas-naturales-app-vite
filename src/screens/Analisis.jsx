import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Mapa1 from "../assets/img/analisis/Mapa1.png"
import Mapa2 from "../assets/img/analisis/Mapa2.png"
import Nube1 from "../assets/img/analisis/nubePalabras1.png"
import Nube2 from "../assets/img/analisis/nubePalabras2.png"
import Pastel1 from "../assets/img/analisis/pastel1.png"
import Pastel2 from "../assets/img/analisis/pastel2.png"
import { Button } from 'primereact/button';

const Analisis = () => {

    const [analisis, setAnalisis] = useState('1');
    const [mapaNubePastel, setMapaNubePastel] = useState({
        mapa : Mapa1,
        nube : Nube1,
        pastel : Pastel1,
        width : "75%",
    })

    const analisisItems = [
        {label: 'Primer Análisis', value: '1'},
        {label: 'Segundo Análisis', value: '2'},
    ];

    useEffect(() =>{
        document.title= `Análisis`
      }, []);

      useEffect(() =>{
        if (analisis === '1'){
            setMapaNubePastel({
                mapa : Mapa1,
                nube : Nube1,
                pastel : Pastel1,
                width : "75%"   
            })
        }else {
            setMapaNubePastel({
                mapa : Mapa2,
                nube : Nube2,
                pastel : Pastel2,
                width : "50%"     
            })
        }
        console.log("mapaNubePastel", mapaNubePastel)
      }, [analisis]);

    return (
        <div>
            <Dropdown 
                className='w-1/2 my-5 mx-14 ring-green-400'
                value={analisis} 
                options={analisisItems} 
                onChange={(e) => setAnalisis(e.value)} 
                placeholder="Selecciona un Análisis"/>

            <div className='flex flex-col md:flex-row items-center'>
                <div className='flex flex-col basis-1/3 items-center'>
                    <div className='my-10 md:my-0' style={{width:"95%", height:"60%"}}>
                        <img src={mapaNubePastel.mapa}/>
                    </div>
                </div>
                <div className='flex flex-col h-96 md:h-64 lg:h-80 basis-full md:basis-1/3 my-10 md:my-0 items-center justify-around'>
                    <b>Total de Comentarios Obtenidos: </b>
                    <span>Youtube 480</span>
                    <div className='my-10 md:my-0' style={{width: mapaNubePastel.width, height:"60%"}}>
                        <img src={mapaNubePastel.pastel}/>
                    </div>
                    <Button className='w-56' label="Análisis de la gráfica"></Button>
                </div>
                <div className=' flex flex-col basis-1/3 items-center'>
                    <b>Total de Comentarios Obtenidos: </b>
                    <span>Youtube 480</span>
                    <div className='my-10 md:my-auto' style={{width: mapaNubePastel.width, height:"45%"}}>
                        <img src={mapaNubePastel.nube}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Analisis;


const colorVerde = {
    background: "green"
}
const colorRed = {
    background: "red"
}
const size = {
    width: "75%",
    height: "60%",
}