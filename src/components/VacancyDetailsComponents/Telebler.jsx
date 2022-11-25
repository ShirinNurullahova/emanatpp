import React from 'react'
import "./VacancyDetails.scss";


function Telebler(props) {
  console.log(props.filteredNews);
  return (
    <div className='Duties'>
    <div className='duties-heading'>
        <h1>Tələblər</h1>
    </div>
    <div className='duties-list'>
        <ul >
          {props.filteredNews && props.filteredNews[0].telebler.map((e) => {
            return(
              <li>• {e}</li>
            )
          })}
        </ul>
    </div>

</div>
  )
}

export default Telebler