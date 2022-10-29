import React, { useEffect } from 'react';
import mapa from "../assets/img/inicio/procesamientoIMG.png";
import RedesSociales from '../components/inicio/RedesSociales';
import { Investigadores } from '../components/inicio/Investigadores';

const Inicio = () => {
    
    useEffect(() =>{
        document.title= `Inicio`
      }, []);  

    return (
        <>
            <h1 className='ml-8 text-lg mt-5'> <b>Nuestro Proyecto</b></h1>
            <div className="flex flex-col content-between " >
                <div className='flex md:flex-row flex-col justify-center items-center h-auto lg:h-56'>
                    <div className= "sm:basis-100% basis-7/12 text-justify px-8 py-5 m-0 md:mr-20" >
                        El turismo es una actividad económica de gran reelevancia en México.
                        Las Áreas Naturales Protegidas son áreas resguardadas para la conservación
                        de su biodiversidad, en las que recientemente se ha buscado implementar
                        estrategias que permitan aprovecharlas turísticamente de una forma sustentable. 
                        El Procesamiento de Lenguaje Narutal es el campo dentro de las ciencias de la 
                        computación que conjunta técnicas de inteligencia artificial con lingüistica y 
                        que, entre otras aplicaciones, permite analizar textos de forma automática.
                    </div>
                    <div className= "sm:basis-100% basis-5/12 py-0 md:py-8 mx-4">
                        <img className="mx-auto my-4"src= {mapa}/>
                    </div>
                </div>

                <h1 className='ml-8 text-lg'><b>Investigadores</b></h1>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className= "" >
                        <Investigadores></Investigadores>
                        
                    </div>
                    <div className= " flex flex-col sm:basis-100% basis-3/12 py-0 mr-4 items-center justify-start">
                        <h5 className='ml-8 text-base mx-16'><b>Siguenos en:</b></h5>
                        <RedesSociales></RedesSociales>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inicio;

const colorVerde = {
    background: "green"
}
const colorRed = {
    background: "red"
}