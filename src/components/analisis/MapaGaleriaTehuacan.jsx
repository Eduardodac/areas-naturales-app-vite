// import React, { useRef, useEffect, useState } from 'react';
// import { classNames } from 'primereact/utils';
// import Mapa1 from "../../assets/img/analisis/mapasTehuacan/Tehuacan1.png"
// import Mapa2 from "../../assets/img/analisis/mapasTehuacan/Tehuacan2.png"
// import { Button } from 'primereact/button';
// import { Galleria } from 'primereact/galleria';
// import './GalleriaCuxtal.css';

// export const MapaGaleriaTehuacan = () => {
//     const [images, setImages] = useState(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [showThumbnails, setShowThumbnails] = useState(false);
//     const [isAutoPlayActive, setAutoPlayActive] = useState(true);
//     const [isFullScreen, setFullScreen] = useState(false);
    
//     const galleria = useRef(null)
//     const descripciones = ["Mapa de marcadores", "Mapa de calor"];
//     useEffect(() => {
//         setImages([Mapa1, Mapa2]);
//         bindDocumentListeners();

//         return () => unbindDocumentListeners();
//     },[]) // eslint-disable-line react-hooks/exhaustive-deps

//     useEffect(() => {
//         setAutoPlayActive(galleria.current.isAutoPlayActive())
//     },[isAutoPlayActive]);

//     const onItemChange = (event) => {
//         setActiveIndex(event.index)
//     }

//     const toggleFullScreen = () => {
//         if (isFullScreen) {
//             closeFullScreen();
//         }
//         else {
//             openFullScreen();
//         }
//     }

//     const onFullScreenChange = () => {
//         setFullScreen(prevState => !prevState )
//     }

//     const openFullScreen = () => {
//         let elem = document.querySelector('.custom-galleria');
//         if (elem.requestFullscreen) {
//             elem.requestFullscreen();
//         }
//         else if (elem.mozRequestFullScreen) { /* Firefox */
//             elem.mozRequestFullScreen();
//         }
//         else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//             elem.webkitRequestFullscreen();
//         }
//         else if (elem.msRequestFullscreen) { /* IE/Edge */
//             elem.msRequestFullscreen();
//         }
//     }

//     const closeFullScreen = () => {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         }
//         else if (document.mozCancelFullScreen) {
//             document.mozCancelFullScreen();
//         }
//         else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//         }
//         else if (document.msExitFullscreen) {
//             document.msExitFullscreen();
//         }
//     }

//     const bindDocumentListeners = () => {
//         document.addEventListener("fullscreenchange", onFullScreenChange);
//         document.addEventListener("mozfullscreenchange", onFullScreenChange);
//         document.addEventListener("webkitfullscreenchange", onFullScreenChange);
//         document.addEventListener("msfullscreenchange", onFullScreenChange);
//     }

//     const unbindDocumentListeners = () => {
//         document.removeEventListener("fullscreenchange", onFullScreenChange);
//         document.removeEventListener("mozfullscreenchange", onFullScreenChange);
//         document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
//         document.removeEventListener("msfullscreenchange", onFullScreenChange);
//     }

//     const thumbnailTemplate = (item) => {
//         return (
//             <div className="grid grid-nogutter justify-content-center">
//                 <img src={item} alt={item.alt} style={{ display: 'block' }} />
//             </div>
//         );
//     }

//     const itemTemplate = (item) => {
//         if (isFullScreen) {
//             return <img src={item} style={{ width: '50%', display: 'block' }} alt={item.alt} />
//         }

//         return <img src={item} alt={item.alt} style={{ width: '100%', display: 'block' }} className = "w-72" />
//     }

//     const renderFooter = () => {
//         let autoPlayClassName = classNames('pi', {
//             'pi-play': !isAutoPlayActive,
//             'pi-pause': isAutoPlayActive
//         });

//         let fullScreenClassName = classNames('pi', {
//             'pi-window-maximize': !isFullScreen,
//             'pi-window-minimize': isFullScreen
//         });

//         return (
//             <div className="custom-galleria-footer">
               
//                 <Button icon={autoPlayClassName} onClick={() => {
//                     if (!isAutoPlayActive) {
//                         galleria.current.startSlideShow();
//                         setAutoPlayActive(true)
//                     }
//                     else {
//                         galleria.current.stopSlideShow();
//                         setAutoPlayActive(false)
//                     }
//                 }} />
//                 {
//                     (
//                         <span className="title-container">
//                             <span>{activeIndex + 1}/{images.length}</span>
//                             <span className="title">Mapa Cuxtal: </span>
//                             <span>{descripciones[activeIndex]}</span>
//                         </span>
//                     )
//                 }
//                 <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
//             </div>
//         );
//     }

//     const footer = renderFooter();
//     const galleriaClassName = classNames('custom-galleria', {
//         'fullscreen': isFullScreen
//     });

//     return (
//         <div>
//             <div className="galleria-demo">
//                 <div className="card">
//                     <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
//                         showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
//                         numVisible={5} circular transitionInterval={1500}
//                         item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
//                         style={{ maxWidth: '380px' }} className={galleriaClassName} />
//                 </div>
//             </div>
//         </div>
//     );
// }