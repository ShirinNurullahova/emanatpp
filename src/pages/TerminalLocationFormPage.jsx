import React, { Fragment, useEffect } from 'react'
import TerminalLocationForm from '../components/TerminalLocationFormComponents/TerminalLocationForm/TerminalLocationForm'


const TerminalLocationFormPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.display = 'none'
        document.getElementsByTagName("footer")[0].style.display = 'none'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <TerminalLocationForm/>
    </div>
  )
}

export default TerminalLocationFormPage