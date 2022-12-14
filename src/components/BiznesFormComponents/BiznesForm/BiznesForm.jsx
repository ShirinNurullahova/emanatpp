import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/shirin/logo.png'
import marketing3 from '../../../assets/img/shirin/marketing3.png'
import star from '../../../assets/img/shirin/required.png'
import left from '../../../assets/img/shirin/left.png'
import '../../BiznesFormComponents/BiznesForm.scss'
const BiznesForm = () => {
    return (
        <div>
            <div className='biznes_form'>
                <div className='biznes_form_left'>
                    <div className='biznes_form_left_logo'>
                        <Link to='/'>
                            <img src={logo} />

                        </Link>
                    </div>
                    <div className='biznes_form_left_img'>
                        <img src={marketing3} />
                    </div>
                </div>
                <div className='biznes_form_right'>
                    <div className='biznes_form_right_h1'>
                        <h1> <span>Biznes </span>əməkdaşlığı</h1>
                    </div>
                    <div className='biznes_form_right_form'>
                        <div className='biznes_form_right_form_p'>
                            <p>Müştərilərinizə daha innovativ və rahat xidmət təmin etmək üçün forumu dolduraraq eManat terminallarında yerləşdirilən xidmətlər sırasına əlavə oluna bilərsiniz.</p>
                        </div>
                        <form>
                            <div className="biznes_form_right_form_element">
                                <label>Şirkətin adı<img className='star' src={star} /></label>
                                <input required type="ad" placeholder='' name="" id="" />
                            </div>
                            <div className='biznes_form_right_form_div'>
                                <p>Nullam viverra, sem a semper varius, neque nunc blandit tortor, id lobortis odio tortor ac urna. Nec tellus ornare commodo.</p>
                            </div>

                            <div className='biznes_form_right_form_different'>
                                <div className="biznes_form_right_form_different_element">

                                    <p className='load'>Fiziki şəxs<img className='star' src={star} /></p>


                                    <label className='lb'>
                                        <input className='' type="radio" checked name='radio' required />
                                    </label>




                                </div>
                                <div className="biznes_form_right_form_different_element">


                                    <p className='load'>Hüquqi şəxs<img className='star' src={star} /></p>


                                    <label className='lb'>
                                        <input className='' type="radio" name='radio' required />
                                    </label>




                                </div>
                            </div>


                            <div className="biznes_form_right_form_element">
                                <label>Xidmət növü<img className='star' src={star} /></label>
                                <input type="ad" placeholder='bank, internet, tv, karqo,kommunal və s.' name="" id="" required />
                            </div>
                            <div className="biznes_form_right_form_element">
                                <label>Bir nəfər üçün orta aylıq ödəniş məbləği<img className='star' src={star} /></label>
                                <input type="ad" placeholder='' name="" id="" required />
                            </div>
                            <div className="biznes_form_right_form_element">
                                <label>Şirkətin aylıq dövriyyəsi<img className='star' src={star} /></label>
                                <input type="ad" placeholder='50' name="" id="" required />
                            </div>
                            <div className="biznes_form_right_form_element">
                                <label>Ad, Soyad <img className='star' src={star} /></label>
                                <input type="ad" placeholder='Ad,soyad' name="" id="" required />
                            </div>
                            <div className="biznes_form_right_form_element">
                                <label>Nömrə<img className='star' src={star} /></label>
                                <input type="ad" placeholder='+994' name="" id="" required />
                            </div>
                            <div className="biznes_form_right_form_element">
                                <label>E-poçt<img className='star' src={star} /></label>
                                <input type="ad" placeholder='user@gmail.com' name="" id="" required />
                            </div>
                            <div className='biznes_form_right_bottom'>
                                <div className='biznes_form_right_bottom_left'>
                                    <img src={left} />
                                    <p>Geri</p>
                                </div>
                                <div className='biznes_form_right_bottom_right'>
                                    <button type='submit'>Göndər</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BiznesForm