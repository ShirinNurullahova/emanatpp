import React,{useEffect} from 'react'
import HrSecond from '../components/HrComponents/HrSecondComponents/HrSecond'
import HrWorker from '../components/HrComponents/HrSecondComponents/HrWorker'
import Tag from '../components/LayoutComponents/Tag/Tag'
const HrSecondPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5';
        document.getElementsByTagName("header")[0].style.display = 'block'
        document.getElementsByTagName("footer")[0].style.display = 'block'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <HrSecond/>
        <HrWorker/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
    </div>
  )
}

export default HrSecondPage