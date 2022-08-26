import React from 'react';
import GaleryCard from './GaleryCard';

const GaleryRow = ({imagenes}) => {
    console.log("en row", imagenes)
    return (
        <>
            <div className='flex flex-col md:flex-row mx-10 lg:mx-auto max-w-6xl'>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img1}></GaleryCard>
                    <GaleryCard img={imagenes.img2}></GaleryCard>
                </div>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img3}></GaleryCard>
                    <GaleryCard img={imagenes.img4}></GaleryCard>
                </div>
                
                
            </div>
            <div className='flex flex-col md:flex-row mx-10 lg:mx-auto max-w-6xl'>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img5}></GaleryCard>
                    <GaleryCard img={imagenes.img6}></GaleryCard>
                </div>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img7}></GaleryCard>
                    <GaleryCard img={imagenes.img8}></GaleryCard>
                </div>
                
                
            </div>
        </>
    );
};

export default GaleryRow;