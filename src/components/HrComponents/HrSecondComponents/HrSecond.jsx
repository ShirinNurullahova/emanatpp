import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CareerVacanciesCard from '../../CareerComponents/CareerVacancies/CareerVacanciesCard/CareerVacanciesCard';
import data from '../HrSecondComponents/internship.json'
import '../../HrComponents/Hr.scss'
import '../../CareerComponents/Career.scss'
const HrSecond = () => {

    return (
        <div className='hr_second'>
            <div className='hr_second_up'>
                <div>
                    <h1>Təcrübə <span>proqramları</span></h1>
                </div>
                <div>
                    <p>Öz vakansiyanızı tapın və müraciət edin!</p>
                </div>
            </div>

            <div className='hr_second_middle'>
            {data.map((listEl, index) => (
                    <CareerVacanciesCard listEl={listEl} index={index}/>
                )
             )}
            </div>

            <div className='hr_second_btn'>
                <button>
                    <Link to='/all-vacancies'>   Bütün vakansiyalar</Link>

                </button>
            </div>
        </div>
    )
}

export default HrSecond