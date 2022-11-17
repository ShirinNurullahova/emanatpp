import React, { Fragment, useEffect } from 'react'
import BiznesForm from '../components/BiznesFormComponents/BiznesForm/BiznesForm'

const BiznesFormPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.display = 'none'
        document.getElementsByTagName("footer")[0].style.display = 'none'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <BiznesForm/>
    </div>
  )
}

export default BiznesFormPage