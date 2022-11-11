import React from "react";
import person from "../../assets/img/bonusPerson.svg"
import news from '../../../src/assets/img/shirin/news.png'
import "./BonusNews.scss";
function BonusComponent({filteredNews}) {
  const news = (filteredNews[0])
  return (
    <div className="bonusComponent">
      <div className="news-bonus-text-part">
        <div className="news-header-bonus">
          <h1>Xəbərlər</h1>
        </div>
        <div className="news-header-img">
          <img src={news.img} />
        </div>
        <div className="news-text-bonus">
          <p>
           {
            news.description
           }
          </p>
        </div>
      </div>
    </div>
  );
}

export default BonusComponent;
