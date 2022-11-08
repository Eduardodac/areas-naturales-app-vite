import React from 'react'
import NubeNegativa from '../../assets/img/analisis/nubesCuxtal/nubeNegativaCuxtal.png'
import NubePositiva from '../../assets/img/analisis/nubesCuxtal/nubePositivaCuxtal.png'
import { Galleria } from 'primereact/galleria';

export const NubesGaleriaCuxtal = () => {

    const images = [NubePositiva,NubeNegativa]

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img 
            src={item} 
            alt={item.alt} 
            className = "w-80" />;
    }

    return (
        <>

            <Galleria 
                value={images} 
                responsiveOptions={responsiveOptions}
                numVisible={5}
                showThumbnails={false} 
                showIndicators 
                item={itemTemplate} />
        </>
    )
}
