import React from 'react'
import News from './News.json'
import {Link} from 'react-router-dom'

const NewsCards = () => {
  return (
    <section className='news-cards'>
      <div className="news-cards-container">

        {News.map((e,i) => {
          return (
            <div key={i} className="news-cards-container-card">
              <div className="news-cards-container-card-heading">
                <p>{e.title}</p>
              </div>

              <div className="news-cards-container-card-image">
                <img src={e.img} alt="" />
              </div>

              <div className="news-cards-container-card-description">
                <p>Arcu est eget tortor etiam diam mus integer maecenas...</p>
              </div>

              <div className="news-cards-container-card-bottom">
                <div className="news-cards-container-card-bottom-date">
                  <p>11.07.22</p>
                </div>

                <div className="news-cards-container-card-bottom-button">
                  <Link to={`${e.id}`}>Ətraflı</Link>
                  <span>&#8599;</span>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default NewsCards