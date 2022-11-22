import React, { Fragment, useEffect} from 'react'
const CoorperativeMain = React.lazy(() => import('../components/CoorperativeComponents/CoorperativeMain/CoorperativeMain')); // Lazy-loaded
const CoorperativeSecond = React.lazy(() => import('../components/CoorperativeComponents/CoorperativeSecond/CoorperativeSecond')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const Coorperative = () => {
    
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5';
        document.getElementsByTagName("header")[0].style.display = 'block'
        document.getElementsByTagName("footer")[0].style.display = 'block'
        window.scrollTo(0, 0)
      }, [])
    
  return (
    <div>
     <CoorperativeMain/>
     <CoorperativeSecond/>
     <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
    </div>
  )
}

export default Coorperative