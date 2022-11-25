import React from "react";
import dateIcon from "../../assets/img/dateIcon.svg";
import "./VacancyDetails.scss";

function DetailsInfo({filteredNews}) {
  const news = (filteredNews[0])
  return (
    <div className="detailsInfo">
      <div className="heading">
        <h1>
          {news.desc}
        </h1>
      </div>

      <div className="date">
        <div className="date-icon">
          <img src={dateIcon}></img>
        </div>
        <div className="date-text">
          <p>Son müraciət tarixi: {news.date}</p>
        </div>
      </div>
{/* 
      <div className="vacancyInfos">
        <div className="vacancyInfo">
          <h1>Vəzifə :</h1>
          <p>Müştəri xidmətləri</p>
        </div>
        <div className="vacancyInfo">
          <h1>İş rejimi :</h1> <p>Full time</p>
        </div>
      </div> */}

      <div className="generalInfo">
        <div className="generalInfo-header">
          <h1>Ümumi məlumat</h1>
        </div>
        <div className="generalInfo-info">
          <p>{news.vezife}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsInfo;
