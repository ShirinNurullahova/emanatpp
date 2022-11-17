import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import BreadCrumbVac from "../components/VacancyDetailsComponents/BreadCrumbVac";
import DetailsInfo from "../components/VacancyDetailsComponents/DetailsInfo";
import Ohdelikler from "../components/VacancyDetailsComponents/Ohdelikler";
import Telebler from "../components/VacancyDetailsComponents/Telebler";
import VacancyDetailButton from "../components/VacancyDetailsComponents/VacancyDetailButton";
import Tag from "../components/LayoutComponents/Tag/Tag";
function VacancyDetail() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="vacancy_detail">
      <BreadCrumbVac />
        <div className="vacancy_detail_pad">
      <DetailsInfo />
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
