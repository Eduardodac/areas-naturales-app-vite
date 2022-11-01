import React from 'react';
import GaleryCard from './GaleryCard';

const GaleryRowTehuacan = ({imagenes}) => {
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

            <div className='flex flex-col md:flex-row mx-10 lg:mx-auto max-w-6xl'>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img9}></GaleryCard>
                    <GaleryCard img={imagenes.img10}></GaleryCard>
                </div>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img11}></GaleryCard>
                    <GaleryCard img={imagenes.img12}></GaleryCard>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mx-10 lg:mx-auto max-w-6xl'>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img13}></GaleryCard>
                    <GaleryCard img={imagenes.img14}></GaleryCard>
                </div>
                <div className='flex w-full'>
                    <GaleryCard img={imagenes.img15}></GaleryCard>
                    <GaleryCard img={imagenes.img16}></GaleryCard>
                </div>
            </div>

        </>
    );
};

export default GaleryRowTehuacan;