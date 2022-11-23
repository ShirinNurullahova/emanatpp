import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Modal/Modal.scss'
import lupa from '../../../assets/img/charm_search.png'
const Modal = ({ menuOpen, setMenuOpen, placeholder, data }) => {
    const boxRef = useRef()
    const open = () => {
        boxRef.current.classList.toggle("open");
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
        setMenuOpen(false)
    }
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord.toUpperCase());
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        const newarr = newFilter.map(e => {
            return {
                'title': e.title.toUpperCase(),
                'link': e.link
            }
        })
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newarr);
        }

    };
    const clearInput = (event) => {
        setFilteredData([])
        setWordEntered("")
    }

    const onClickHandler = (e) => {
        if (e.target.className.includes('modal_container')) {
            setMenuOpen(false)
            document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
        }
    }




    return (
        <div className={`modal_container ${menuOpen ? "active" : ""}`} onClick={onClickHandler} >

            <div className={`modal_search ${menuOpen && "open"}`} ref={boxRef}>
                <div className='modal_search_cancel' onClick={open}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.7072 6.70709L25.293 5.29297L16.0001 14.5858L6.70722 5.29297L5.29297 6.70709L14.5859 16L5.29297 25.293L6.70722 26.7071L16.0001 17.4142L25.293 26.7071L26.7072 25.293L17.4143 16L26.7072 6.70709Z" fill="#070814" />
                    </svg>

                </div>
                <div className='modal_search_input'>
                    <div>
                        <img src={lupa} />
                    </div>
                    <input type="text" value={wordEntered} placeholder={placeholder} 
                        onChange={handleFilter} />
                    {filteredData.length != 0 && (
                        <div className="dataResult" >
                            {filteredData.slice(0, 5).map((value, index) => {
                                return (
                                    <Link to={value.link} onClick={open}>
                                        <div className='item-div'>
                                            <p className="dataItem" onClick={clearInput} >
                                                {value.title}
                                            </p>
                                        </div>
                                    </Link>

                                );
                            })}
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Modal
