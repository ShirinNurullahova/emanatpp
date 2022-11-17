import React, { useEffect } from 'react';
import UniMain from '../components/UniComponents/UniMain/UniMain';
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const UniPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <UniMain />
            <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']} />
        </div>
    )
}

export default UniPage