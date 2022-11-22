import React, { Fragment, useEffect} from 'react'
import Error from '../components/ErrorComponents/Error/Error';
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const ErrorPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5';
        document.getElementsByTagName("header")[0].style.display = 'block'
        document.getElementsByTagName("footer")[0].style.display = 'block'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <Error/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>

    </div>
  )
}

export default ErrorPage