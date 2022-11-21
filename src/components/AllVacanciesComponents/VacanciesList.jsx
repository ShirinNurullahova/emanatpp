import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import data from '../AllVacanciesComponents/all-list.json'
import CareerVacanciesCard from '../CareerComponents/CareerVacancies/CareerVacanciesCard/CareerVacanciesCard';
const VacanciesList = () => {
    const params = useParams()
    // console.log(params);
    const {id} = params
  
    // const filteredNews = data.filter((item) => item.id == id)

    // console.log(id)
    const searchRef = useRef(null);
   
    function clearSearchInput() {
        searchRef.current.value = ""
    }

    return (
        <div className='vacancies_list'>
            <div className='searc_container'>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder='Axtarış...'
                    ref={searchRef}
                />
                <div className='icons'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6257 16.6249L13.0742 13.0672M15.0423 8.31242C15.0423 10.0971 14.3334 11.8087 13.0714 13.0707C11.8094 14.3326 10.0978 15.0416 8.31315 15.0416C6.52847 15.0416 4.81688 14.3326 3.55491 13.0707C2.29295 11.8087 1.58398 10.0971 1.58398 8.31242C1.58398 6.52773 2.29295 4.81614 3.55491 3.55418C4.81688 2.29222 6.52847 1.58325 8.31315 1.58325C10.0978 1.58325 11.8094 2.29222 13.0714 3.55418C14.3334 4.81614 15.0423 6.52773 15.0423 8.31242V8.31242Z" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg onClick={clearSearchInput} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5258 4.40141L16.5977 3.47339L10.4992 9.57184L4.40076 3.47339L3.47266 4.40141L9.57115 10.4999L3.47266 16.5984L4.40076 17.5264L10.4992 11.428L16.5977 17.5264L17.5258 16.5984L11.4273 10.4999L17.5258 4.40141Z" fill="#5E5E5E" />
                    </svg>
                </div>
            </div>
            <div className='vacancie_conntainer'>
                {data.map((listEl, index) => (
                     <CareerVacanciesCard listEl={listEl} index={index} cardWidth={true}/>
                ))}
            </div>
            <div className='more_btn'>
                <button>Daha çox</button>
            </div>
        </div>
    )
}

export default VacanciesList;