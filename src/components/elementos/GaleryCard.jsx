import React from 'react';


const GaleryCard = ({img}) => {
    return (
        <>
            <div className='my-4 p-1 shadow-2xl w-full h-52 mx-2 cel:mx-4 cel:h-60 '>
                <img className=" w-full h-full" src= {img}/>
            </div>
        </>
    );
};

export default GaleryCard;