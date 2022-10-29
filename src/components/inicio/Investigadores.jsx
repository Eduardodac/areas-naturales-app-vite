import React from 'react'
import { CardInvestigador } from './CardInvestigador'
import DrMarco from "../../assets/img/inicio/DrMarco.jpg";
import DraMagdalena from "../../assets/img/inicio/DraMagdalena.jpeg";
import Cyn from "../../assets/img/inicio/Cyn.jpg";

export const Investigadores = () => {
  return (
    <div className='flex flex-col justify-around sm:flex-row sm:basis-100% basis-7/12  md:mr-20 w-175 ml-8'>
        <CardInvestigador img={DrMarco} nombre= {"Dr. Marco Antonio Moreno Ibarra"}/>
        <CardInvestigador img={DraMagdalena} nombre= {"Dr. Ana María Magdalena Saldaña Pérez"}/>
        <CardInvestigador img={Cyn} nombre= {"Ing. Cynthia Montserrat Yustis Cruz"}/>
    </div>
  )
}
