
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './redes.css';
import { useNavigate } from 'react-router-dom';


const RedesSociales = () => {

    const navigate = useNavigate();

    const redireccionar = () => {

    }

    return (
        <div className="button">
            <div className="card">
                <div className="flex flex-col template w-32 ">

                    <Button className="twitter p-0 mt-2" aria-label="Twitter">
                        <a href="https://twitter.com/PIIGLAB">
                            <i className="pi pi-twitter px-2"></i>
                            <span className="px-3">Twitter</span>
                        </a>

                    </Button>

                    <Button className="facebook p-0 mt-2" aria-label="Facebook">
                        <a href="https://www.facebook.com/profile.php?id=100057303196010">
                            <i className="pi pi-facebook px-2"></i>
                            <span className="px-3">Facebook</span>
                        </a>

                    </Button>

                    <Button className="youtube p-0 mt-2" aria-label="Youtube">
                        <a href="https://www.youtube.com/watch?v=V9WPvmb6338">
                            <i className="pi pi-youtube px-2"></i>
                            <span className="px-3">Youtube</span>
                        </a>

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RedesSociales;