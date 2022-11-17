import React from 'react'
import { Link } from 'react-router-dom'

import CareerVacanciesCard from './CareerVacanciesCard/CareerVacanciesCard'

const CareerVacancies = () => {
    return (
        <div className='career_vacancies'>

            <div className='career_vacancies_head'>
                <h1><span>Yeni</span> vakansiyalar</h1>
            </div>
            <div className='career_vacancies_middle'>
                <CareerVacanciesCard />
                <CareerVacanciesCard />
                <CareerVacanciesCard />
             
            </div>
             <div  className='career_vacancies_btn'>
                <button>
                    <Link to='/all-vacancies'>
                    Bütün vakansiyalar
                    </Link>
                 
                    </button>
             </div>
        </div>
    )
}

export default CareerVacancies