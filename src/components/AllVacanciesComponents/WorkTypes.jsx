import React, { useRef, useEffect, useState } from 'react';
import workTypes from './work-types.json';

const WorkTypes = () => {
    const [drop, setDrop] = useState(true)
    

    return (
        <div className='work_types_part'>
            <ul className='type_block'>
                {workTypes.map((work, index) => (
                    <li key={index} className='main_block'>
                        <button className='block_title' onClick={(e)=>{
                                setDrop(true)
                                const closest = (e.target.closest('.main_block'))
                               
                                const spesific = closest.querySelector('.block_list')
                                const spbtn = closest.querySelector('.btn')
                              
                                if ( !spesific.className.includes('active')) {
                                    spesific.classList.add('active')
                                    spbtn.style.transform='rotate(180deg)'
                                    // spesific.style.transition="none";

                                }
                                else {
                                    spesific.classList.remove('active')
                                    spbtn.style.transform='rotate(360deg)'
                                    // spesific.style.transition="all 0.1s ease 0s ,visibility 0s ease 0.1s, z-index 0s ease 0.01s ";

                                }
                                
                            }}>
                            <p>{work.title}</p>
                            <div  className={`btn ${!drop ? 'block_title_action' : ""}`}  >
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.998 10L9.10843 1.89112L0.999549 9.78074" stroke="#070814" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                        </button>
                        <ul className={`block_list ${ !drop ? 'active' : ""}`} >
                            {work.elements.map((el, index) => (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="radio"
                                            name='filter'
                                        />
                                        <p>{el.item}</p>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
         
        </div>
    )
}

export default WorkTypes;