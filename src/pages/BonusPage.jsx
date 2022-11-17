import React,{useEffect}from 'react'
import BonusComponent from '../components/BonusComponents/BonusComponent'
import BreadCrumbBonus from '../components/BonusComponents/BreadCrumbBonus'
import Tag from '../components/LayoutComponents/Tag/Tag'
import News from '../components/NewsComponents/News.json'
import {useParams} from 'react-router-dom'
function BonusPage() {

  const params = useParams()
  // console.log(params);
  const {id} = params

  const filteredNews = News.filter((item) => item.id == id)
  // console.log(id)
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <BreadCrumbBonus/>
        <BonusComponent filteredNews={filteredNews}/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>

    </div>
  )
}

export default BonusPage