import React,{useEffect} from 'react'
import PaymentTerminal from '../components/PaymentTerminalComponents/PaymentTerminal/PaymentTerminal'
import Tag from '../components/LayoutComponents/Tag/Tag'
const PaymentPage = () => {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <PaymentTerminal/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali']}/>

    </div>
  )
}

export default PaymentPage