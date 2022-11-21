import React from 'react'
import { Link } from 'react-router-dom'
import vacancieList from '../CareerVacancies/vacancie-list.json'
import CareerVacanciesCard from './CareerVacanciesCard/CareerVacanciesCard'

const CareerVacancies = () => {
    return (
        <div className='career_vacancies'>

            <div className='career_vacancies_head'>
                <h1><span>Yeni</span> vakansiyalar</h1>
            </div>
            <div className='career_vacancies_middle'>
            {vacancieList.map((listEl, index) => (
                    <CareerVacanciesCard listEl={listEl} index={index}/>
                )
             )}
             
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