import React,{useEffect}from 'react'
import Tag from '../components/LayoutComponents/Tag/Tag'
import Cards from '../components/NewVacanciesComponents/Cards'
import NewVacanciesTitle from '../components/NewVacanciesComponents/NewVacanciesTitle'
import VacancyDetailButton from '../components/VacancyDetailsComponents/VacancyDetailButton'
function NewVacancies() {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5';
        document.getElementsByTagName("header")[0].style.display = 'block'
        document.getElementsByTagName("footer")[0].style.display = 'block'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <NewVacanciesTitle/>
        <Cards/>
        <VacancyDetailButton 
        text="Bütün vakansiyalar"
        link="../all-vacancies"
        />
       <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
        
    </div>
  )
}

export default NewVacancies