import React, { useState } from 'react'
import plus from '../../../../src/assets/img/shirin/plus.png'

import '../DropDown/DropDown.scss'
const DropDown = ({ selected, setSelected, options }) => {
    const [isActive, setIsActive] = useState(false)
    const [mainOption, setMainOption] = useState(selected)

    return (
        <div className='dropdown'>
            <div className='dropdown-btn'>{mainOption}</div>
            <img src={plus} onClick={(e) => {
                setIsActive(false)
                const closest = (e.target.closest('.dropdown'))
                const dropdownContent = document.querySelectorAll('.dropdown-content')
                dropdownContent.forEach((item, index) => {
                    if (item.className.includes('active')) {
                        item.classList.remove('active')
                    }
                })
                const spesific = closest.querySelector('.dropdown-content')
                if (!spesific.className.includes('active')) {
                    spesific.classList.add('active')
                }
                else {
                    spesific.classList.remove('active')

                }

            }} />
            <div className={`dropdown-content ${isActive ? "active" : ""}`}>
                {options.map(option => {
                    return (
                        <div className='dropdown-item' onClick={(e) => {
                            const dropdownContent = document.querySelectorAll('.dropdown-content')
                            dropdownContent.forEach((item, index) => {
                                if (item.className.includes('active')) {
                                    item.classList.remove('active')
                                }
                            })
                            if (e.target.closest('.payment_terminal_div_form_element_div')) {
                                console.log(option);
                                setMainOption(option)
                                setSelected(option)
                            }
                        }
                        }>
                            {option}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DropDown