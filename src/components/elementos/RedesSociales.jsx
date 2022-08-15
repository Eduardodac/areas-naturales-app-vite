
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './redes.css';

const RedesSociales = () => {

    return (
        <div className="button">
            <div className="card">
                <div className="flex flex-col template w-32 ">
                    <Button className="twitter p-0 mt-2" aria-label="Twitter">
                        <i className="pi pi-twitter px-2"></i>
                        <span className="px-3">Twitter</span>
                    </Button>
                    
                    <Button className="facebook p-0 mt-2" aria-label="Facebook">
                        <i className="pi pi-facebook px-2"></i>
                        <span className="px-3">Facebook</span>
                    </Button>
                    
                    <Button className="youtube p-0 mt-2" aria-label="Youtube">
                        <i className="pi pi-youtube px-2"></i>
                        <span className="px-3">Youtube</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RedesSociales;