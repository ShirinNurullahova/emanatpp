import React from 'react'
import { Link } from 'react-router-dom'
import '../../CareerComponents/Career.scss'
const CareerImprove = () => {
    return (
        <div className='career-improve'>
            <div className='career-improve_header'>
                <h2>
                    <span>Gələcəyimizi</span> birgə inkişaf edirik</h2>
            </div>
            <div className='career-improve_text'>
                <p>Karyera sərgilərinin bir parçasıyıq</p>
            </div>
            <div className='career-improve_btn'>
                <button><Link to='/uni'>Ətraflı</Link></button>
            </div>
        </div>
    )
}

export default CareerImprove