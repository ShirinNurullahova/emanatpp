import React from 'react'
import worker from '../../../assets/img/shirin/worker.png'
const Worker = () => {
    return (
        <div className='hr_worker_bottom_element'>
            <div>
                <img src={worker} />
            </div>
            <div>
                <p>Ad</p>
                <p>Soyad</p>
                <p>Vəzifə</p>
            </div>

        </div>
    )
}

export default Worker