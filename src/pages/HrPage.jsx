import React, { Fragment, useEffect} from 'react'
const Hr = React.lazy(() => import('../components/HrComponents/HrOneComponents/Hr')); // Lazy-loaded





const HrPage = () => {
    useEffect(() => {
      document.getElementsByTagName("header")[0].style.background = '#0867b5';
      document.getElementsByTagName("header")[0].style.display = 'block'
      document.getElementsByTagName("footer")[0].style.display = 'block'
      window.scrollTo(0, 0)
    }, [])
  return (
    <Fragment>
      <Hr/>
    </Fragment>
  )
}

export default HrPage