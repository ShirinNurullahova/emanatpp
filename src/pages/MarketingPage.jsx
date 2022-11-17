import React, { Fragment, useEffect } from 'react'
import MarketingForm from '../components/MarketingFormComponents/MarketingForm/MarketingForm'

const MarketingPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.display = 'none'
        document.getElementsByTagName("footer")[0].style.display = 'none'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <MarketingForm/>
    </div>
  )
}

export default MarketingPage