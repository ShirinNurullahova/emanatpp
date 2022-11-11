import React, { Fragment } from 'react'

const NewsMain = () => {
    return (
        <main className='news-main'>
            <div className='news-main-one' >
                <h1 className='news-main-one-h1'>
                    Müştərİlərİnİzə xİdmət ödənİşlərİnİ etmələrİ üçün
                    <span className='news-main-one-h1-span'> ən effektİv vasİtə</span> təqdİm etmək İstəyİrsİnİz?
                </h1>
                <p className="news-main-one-p">
                    O zaman yüksək keyfiyyətli, etibarlı və
                    təhlükəsiz eManat nağd ödəniş terminalını seçin
                </p>
                <div className="news-main-one-btn">
                    <button>Bizə qoşulun</button>
                </div>
            </div>
        </main>
    )
}

export default NewsMain