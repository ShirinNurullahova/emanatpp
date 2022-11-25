import React from 'react'
import '../HomeComponents/Home.scss'
import data from '../NewsComponents/News.json'

const HomeCard = ({ item }) => {
    console.log(item);
    return (
        <div className='home_card'>
            <div className='home_card_div'>
                <div className='home_card_div_img'>
                    <img src={item.img} />
                </div>
                <div className='home_card_div_p'>
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeCard