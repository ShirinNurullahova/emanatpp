import React from 'react'
import { Link } from 'react-router-dom'


const HomeSocial = () => {
    return (
        <div className='home_social'>
            <div className='home_social_main'>
                <div className='home_social_main_h1'>
                    <h1>Korporativ <span>Sosial</span> Məsuliyyətimiz</h1>
                </div>
                <div className='home_social_main_p'>
                    <p>Hər zaman ölkəmizin və gəncliyimizin davamlı inkişafına qatqıda olmağa çalışırıq</p>
                </div>
                <div className='home_social_main_btn'>
                    <button><Link to='/coorperative'>Ətraflı</Link></button>
                </div>
            </div>

        </div>
    )
}

export default HomeSocial