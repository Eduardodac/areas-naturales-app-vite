import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Boton = ({Texto, Id, direccion=null}) => {

    const hover = (e)=>{
        e.target.style.background = 'rgb(136,239,135)';
    }
    const out = (e)=>{
        e.target.style.background = 'rgb(152,255,150)';
    }

    let navigate = useNavigate();
    const navegar = () => {
        navigate("/"+direccion)
    }

    return direccion===null ? null: (
        <Button 
            id={Id} 
            style={estiloBoton} 
            onMouseOver= {hover} 
            onMouseLeave = {out} 
            className="p-button-success"
            onClick = {navegar}>
            {Texto}             
        </Button>
    );
};

export default Boton;

const estiloBoton = {
    background: "rgb(152,255,150)",
    borderColor: "rgb(152,255,150)",
    color: "rgb(0,52,0)",
    marginRight: "10px"
}
