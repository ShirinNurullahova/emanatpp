import React, { Fragment, useEffect } from 'react'
import CareerVacancies from '../components/CareerComponents/CareerVacancies/CareerVacancies';
import CareerVideo from '../components/CareerComponents/CareerVideo/CareerVideo';
const CareerBlue = React.lazy(() => import('../components/CareerComponents/CareerBlue/CareerBlue')); // Lazy-loaded
const CareerMain = React.lazy(() => import('../components/CareerComponents/CareerMain/CareerMain')); // Lazy-loaded
const CareerWhite = React.lazy(() => import('../components/CareerComponents/CareerWhite/CareerWhite')); // Lazy-loaded
const CareerDark = React.lazy(() => import('../components/CareerComponents/CareerDark/CareerDark')); // Lazy-loaded
const CareerImprove = React.lazy(() => import('../components/CareerComponents/CareerImprove/CareerImprove')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded





const CareerPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <CareerMain />
      <CareerDark />
      <CareerVideo/>
      <CareerVacancies/>
      <CareerWhite />
      <CareerBlue />
      <CareerImprove/>
      <Tag tags={['#əməliyatlar,#maliyə,#satış,#analitika,#idarəetmə ,#hesabatlılıq']}/>
    </Fragment>
  )
}

export default CareerPage