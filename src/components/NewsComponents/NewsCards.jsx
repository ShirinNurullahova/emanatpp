import React from 'react'
import News from './News.json'
import { Link } from 'react-router-dom'

const NewsCards = () => {
  return (
    <section className='news-cards'>

      <div className="news-cards-container">

        {News.map((e, i) => {
          return (
            <Link to={`${e.id}`}>
              <div key={i} className="news-cards-container-card">


                <div className="news-cards-container-card-image">
                  <img src={e.img} alt="" />
                </div>

                <div className="news-cards-container-card-description">
                  <p>{e.title}</p>
                </div>


              </div>
            </Link>
          )
        })}

      </div>
    </section>
  )
}

export default NewsCards