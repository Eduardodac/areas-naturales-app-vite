import React from 'react'

export const Pastel = () => {
    return (
        <>
            <b>Total de Comentarios Obtenidos: </b>
            <span>Youtube 480</span>
            <div className='my-10 md:my-0' style={{ width: mapaNubePastel.width, height: "60%" }}>
                <img src={mapaNubePastel.pastel} />
            </div>
            <Button className='w-56' label="Análisis de la gráfica"></Button>
        </>

    )
}
