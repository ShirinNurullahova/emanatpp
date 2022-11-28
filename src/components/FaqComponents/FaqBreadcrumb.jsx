import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import man from '../../assets/img/shirin/man99.png'
const FaqBreadcrumb = () => {
  return (
    <section className='breadcrumb'>
      <div className='breadcrumb-container'>
        <div className='breadcrumb-container-up'>
          <h3>Ana səhifə  <span> / Tez-tez verilən suallar</span> </h3>
        </div>
        <div className='breadcrumb-container-img'>
          <img src={man} />
        </div>
      </div>
    </section>
  )
}

export default FaqBreadcrumb