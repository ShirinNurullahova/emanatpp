import React from 'react'
import Worker from './Worker'

const HrWorker = () => {
  return (
    <div className='hr_worker'>
        <div>
            <h1>
            Təqaüd proqramlarıdakı <span>işçilər</span>
            </h1>
        </div>
       <div className='hr_worker_bottom'>
           <Worker/>
           <Worker/>
           <Worker/>
           <Worker/>
       </div>
    </div>
  )
}

export default HrWorker