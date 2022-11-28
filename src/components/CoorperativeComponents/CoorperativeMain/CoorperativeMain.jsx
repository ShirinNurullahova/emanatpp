import React, { Fragment, useRef, useEffect } from 'react'
import terminal from '../../../assets/img/shirin/terminal.png'
import three from '../../../assets/img/shirin/tree.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../CoorperativeComponents/Coorperative.scss'
gsap.registerPlugin(ScrollTrigger)

const CoorperativeMain = () => {
    return (
        <div>
            <Fragment>
                <main className='coorperative-main'>
                    <div className='coorperative-main-one' >
                        <h1 className='coorperative-main-one-h1'>
                            Tortor ac pretium. Accumsan
                            <span className='coorperative-main-one-h1-span'> ipsum  </span>  nostra
                        </h1>
                        <p className="coorperative-main-one-p">
                            O zaman yüksək keyfiyyətli, etibarlı və
                            təhlükəsiz eManat nağd ödəniş terminalını seçin
                        </p>
                        <div className="coorperative-main-one-btn">
                            <button>Bizə qoşulun</button>
                        </div>
                    </div>
                    <div className='coorperative-main-img'>
                        <img src={three} loading="lazy" />
                    </div>
                </main>

            </Fragment>
        </div>
    )
}

export default CoorperativeMain