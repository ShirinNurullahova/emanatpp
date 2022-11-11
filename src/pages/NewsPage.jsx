import React, {Fragment, useEffect} from 'react'
import Tag from '../components/LayoutComponents/Tag/Tag'
import '../components/NewsComponents/News.scss'
import NewsCards from '../components/NewsComponents/NewsCards'
import NewsMain from '../components/NewsComponents/NewsMain'

const NewsPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])
  return (
    <Fragment>
        <NewsMain/>
        <NewsCards/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
    </Fragment>
  )
}

export default NewsPage