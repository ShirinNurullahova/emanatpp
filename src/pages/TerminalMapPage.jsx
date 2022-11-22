import React, { useEffect } from 'react';
import '../components/TerminalMapComponents/TerminalMap.scss';
const TerminalMap = React.lazy(() => import('../components/TerminalMapComponents/TerminalMap')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const TerminalMapPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5';
        document.getElementsByTagName("header")[0].style.display = 'block'
        document.getElementsByTagName("footer")[0].style.display = 'block'
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <TerminalMap />
            <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>
        </div>
    )
}

export default TerminalMapPage;