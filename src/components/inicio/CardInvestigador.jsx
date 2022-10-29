import React from 'react'

export const CardInvestigador = ({img, nombre}) => {
  return (
    <div className='w-40 '>
        <img className="my-4"src= {img}/>
        <div className='text-center text-sm'>
           <span>{nombre}</span> 
        </div>
        
    </div>
  )
}
