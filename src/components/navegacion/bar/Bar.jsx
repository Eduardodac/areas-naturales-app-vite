import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import Boton from '../../elementos/Boton';
import { Avatar } from 'primereact/avatar';
import IPN from "../../../assets/img/inicio/ipn.png"
import LogoCIC from "../../../assets/img/inicio/LogoCIC.png"

const Bar = () => {

    const leftNavbar = (
        <>
            <Boton Id ="1" Texto="INICIO" direccion = "Inicio"></Boton>
            <Boton Id ="2" Texto="ANÁLISIS" direccion = "Analisis"></Boton>
            <Boton Id ="3" Texto="RUTAS" direccion = "Rutas"></Boton>
            <Boton Id ="4"Texto="GALERÍA" direccion = "Galeria"></Boton>
        </>

    );

    const rightNavbar = (
        <>
            <Avatar image={IPN} size="large"/>
            <Avatar image={LogoCIC} size="large"/>
        </>
    );
    
    const leftMessage = (
        <>
            <span>Análisis de comportamiento de turistas en áreas naturales protegidas aplicando aprendizaje automático</span>
        </>
    )
    
    return (    
        <>
            <Toolbar  className = "w-auto px-2 pb-1 pt-0" left = {leftMessage}/>
            <Toolbar style = {navbar} className = "w-auto p-4" left = {leftNavbar} right = {rightNavbar}/>
        </>
    );
};

export default Bar;

const navbar = {
    background: "#98ff96"

}
