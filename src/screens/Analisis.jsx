import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import PastelCuxtal from "../assets/img/analisis/pastelCuxtal.png"
import PastelTehuacan from "../assets/img/analisis/pastelTehuacan.png"
import { NubesGaleriaCuxtal } from '../components/analisis/NubesGaleriaCuxtal';
import { NubesGaleriaTehuacan} from '../components/analisis/NubesGaleriaTehuacan';
import { MapaGaleriaCuxtal } from '../components/analisis/MapaGaleriaCuxtal';

const Analisis = () => {

    const [analisis, setAnalisis] = useState('1');
    const [mapaNubePastel, setMapaNubePastel] = useState({
        nombre: "Cuxtal",
        pastel: PastelCuxtal,
        comentario: "positivo"
    })

    const analisisItems = [
        { label: 'Cuxtal', value: '1' },
        { label: 'Tehuacan', value: '2' },
    ];

    useEffect(() => {
        document.title = `Análisis`
    }, []);

    useEffect(() => {
        if (analisis === '1') {
            setMapaNubePastel({
                nombre: "Cuxtal",
                pastel: PastelCuxtal,
                comentario: "positivo"
            })
        } else {
            setMapaNubePastel({
                nombre: "Tehuacan",
                pastel: PastelTehuacan,
                comentario: "negativo"
            })
        }
    }, [analisis]);

    return (
        <div>
            <Dropdown
                className='w-1/2 my-5 mx-14 ring-green-400'
                value={analisis}
                options={analisisItems}
                onChange={(e) => setAnalisis(e.value)}
                placeholder="Selecciona un Análisis" />

            <div className='flex flex-col md:flex-row h-96 mx-4'>
                <div className='flex flex-col basis-1/3 '>
                    {/* <div className='my-10 md:my-0'>
                        <img className='w-full h-96' src={mapaNubePastel.mapa} />
                    </div> */}
                    <MapaGaleriaCuxtal/>
                </div>
                <div className='flex flex-col h-full md:h-64 lg:h-80 basis-full md:basis-1/3 my-10 md:my-0 items-center'>
                    <span className='w-full text-center'><b>Total de Comentarios Obtenidos: </b></span>
                    <span>Youtube 480</span>
                    <div className='my-10 md:my-5'>
                        <img className='w-80' src={mapaNubePastel.pastel} />
                    </div>
                </div>

                <div className=' flex flex-col basis-1/3 items-center'>
                    <b>Fecha de Actualización: Octubre 2022</b>
                    <span className='w-full text-center'>{"Palabras frecuentes identificadas en comentarios " + mapaNubePastel.comentario}</span>
                    {/* <div className='my-10 md:my-5'>
                        <img className = "w-72" src={mapaNubePastel.nube} />
                    </div> */}

                    {mapaNubePastel.nombre==="Cuxtal"? NubesGaleriaCuxtal(): NubesGaleriaTehuacan()}

                </div>
            </div>
        </div >
    );
};

export default Analisis;