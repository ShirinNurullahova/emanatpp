import React, { Fragment,useEffect } from 'react'
import '../components/ContactComponents/Contact.scss'
const ContactMain = React.lazy(() => import('../components/ContactComponents/ContactMain')); // Lazy-loaded
const ContactForm = React.lazy(() => import('../components/ContactComponents/ContactForm')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
        <ContactMain/>
        <ContactForm/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
    </Fragment>
  )
}

export default ContactPage