import React, { useRef, useEffect, useState } from 'react';
import workTypes from './work-types.json';

const WorkTypes = () => {
    const [drop, setDrop] = useState(true)
    const sideLine = useRef(null);
    const sideLineActive = useRef(null);
    let activeLineDefaultHeight;
    let lineDefaultHeight;
    let defaultSpace;

    



    // Firstly detected default heights of lines
    useEffect(() => {
        activeLineDefaultHeight = sideLineActive.current.offsetHeight;
        lineDefaultHeight = sideLine.current.offsetHeight;
        defaultSpace = lineDefaultHeight - activeLineDefaultHeight;

    }, [sideLineActive, sideLine])

    // Height of active line changes when scrolled 
    function onScroll(e) {
        const scrollHeight = +e.target.scrollHeight - +e.target.offsetHeight;
        const currentScrollHeight = (e.target.scrollTop * defaultSpace) / scrollHeight;
        const finalAddHeight = activeLineDefaultHeight + currentScrollHeight;
        sideLineActive.current.style.height = `${finalAddHeight}px`;
    }
   
    return (
        <div className='work_types_part'>
            <ul className='type_block' onScroll={e => onScroll(e)
            
            }>
                {workTypes.map((work, index) => (
                    <li key={index} className='main_block'>
                        <button className='block_title'>
                            <p>{work.title}</p>
                            <div onClick={(e)=>{
                                setDrop(true)
                                const closest = (e.target.closest('.main_block'))
                               
                                const spesific = closest.querySelector('.block_list')
                                const spbtn = closest.querySelector('.btn')
                              
                                if ( !spesific.className.includes('active')) {
                                    spesific.classList.add('active')
                                    spbtn.style.transform='rotate(180deg)'
                              
                                }
                                else {
                                    spesific.classList.remove('active')
                                    spbtn.style.transform='rotate(360deg)'
                                  
                                }
                                
                            }} className={`btn ${!drop ? 'block_title_action' : ""}`}  >
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
            <div className='side_line' ref={sideLine}>
                <div className='side_line_back'></div>
                <div className='side_line_active' ref={sideLineActive}></div>
            </div>
        </div>
    )
}

export default WorkTypes;