import React from 'react'
import "./VacancyDetails.scss";


function Ohdelikler(props) {

  return (
    <div className='Duties'>
        <div className='duties-heading'>
            <h1>İş şəraiti</h1>
        </div>
        <div className='duties-list'>
            <ul>
            {props.filteredNews && props.filteredNews[0].ish.map((e) => {
            return(
              <li>• {e}</li>
            )
          })}
                
            </ul>
        </div>

    </div>
  )
}

export default Ohdelikler