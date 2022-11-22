import React,{useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import BreadCrumbVac from "../components/VacancyDetailsComponents/BreadCrumbVac";
import DetailsInfo from "../components/VacancyDetailsComponents/DetailsInfo";
import Ohdelikler from "../components/VacancyDetailsComponents/Ohdelikler";
import Telebler from "../components/VacancyDetailsComponents/Telebler";
import VacancyDetailButton from "../components/VacancyDetailsComponents/VacancyDetailButton";
import Tag from "../components/LayoutComponents/Tag/Tag";
import data from '../components/AllVacanciesComponents/all-list.json'

function VacancyDetail() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
    document.getElementsByTagName("header")[0].style.display = 'block'
    document.getElementsByTagName("footer")[0].style.display = 'block'


    window.scrollTo(0, 0)
  }, [])
  const params = useParams()
  const {id }  = params

  const filteredNews = data.filter((item) => item.id == id)
  console.log(filteredNews);


  return (
    <>
    <div className="vacancy_detail">
      <BreadCrumbVac />
        <div className="vacancy_detail_pad">
      <DetailsInfo filteredNews={filteredNews}/>
      <Ohdelikler />
      <Telebler />
      
      <VacancyDetailButton
      link="/contact"
      text="Müraciət et"/>
      </div>
     

    </div>
     <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
     </>
  );
}

export default VacancyDetail;
