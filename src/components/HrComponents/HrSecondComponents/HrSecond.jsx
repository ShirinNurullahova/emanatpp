import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CareerVacanciesCard from '../../CareerComponents/CareerVacancies/CareerVacanciesCard/CareerVacanciesCard'
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
                <CareerVacanciesCard />
                <CareerVacanciesCard />
                <CareerVacanciesCard />
                <CareerVacanciesCard />
                <CareerVacanciesCard />
                <CareerVacanciesCard />
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