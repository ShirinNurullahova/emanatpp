import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/shirin/logo.png'
import marketing1 from '../../../assets/img/shirin/marketing1.png'
import star from '../../../assets/img/shirin/required.png'
import left from '../../../assets/img/shirin/left.png'
import plus from '../../../assets/img/shirin/plus.png'
import '../../MarketingFormComponents/MarketingForm.scss'
const MarketingForm = () => {
  return (
    <div className='marketing_form'>
      <div className='marketing_form_left'>
        <div className='marketing_form_left_logo'>
          <Link to='/'>
            <img src={logo} />

          </Link>
        </div>
        <div className='marketing_form_left_img'>
          <img src={marketing1} />
        </div>
      </div>
      <div className='marketing_form_right'>
        <div className='marketing_form_right_h1'>
          <h1> <span>Marketinq</span> formu</h1>
        </div>
        <div className='marketing_form_right_form'>
          <form>
            <div className="marketing_form_right_form_element">
              <label>Ad, Soyad <img className='star' src={star} /></label>
              <input type="ad" placeholder='Ad,soyad' name="" id="" />
            </div>
            <div className="marketing_form_right_form_element">
              <label>Vəzifə<img className='star' src={star} /></label>
              <input type="ad" placeholder='' name="" id="" />
            </div>
            <div className="marketing_form_right_form_element">
              <label>Şirkətin adı<img className='star' src={star} /></label>
              <input type="ad" placeholder='' name="" id="" />
            </div>
            <div className="marketing_form_right_form_element">
              <p className='load'>Sosial media<img className='star' src={star} /></p>


              <label className='lb'>Cv
                <div className='vector'>
                  <img src={plus} />
                </div>
                <input className='' type="file" />
              </label>




            </div>
            <div className="marketing_form_right_form_element">
              <label>Nömrə<img className='star' src={star} /></label>
              <input type="ad" placeholder='+994' name="" id="" />
            </div>
            <div className="marketing_form_right_form_element">
              <label>E-poçt<img className='star' src={star} /></label>
              <input type="ad" placeholder='user@gmail.com' name="" id="" />
            </div>
            <div className="marketing_form_right_form_element">
              <label>Müraciət mətni<img className='star' src={star} /></label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>

        </div>
        <div className='marketing_form_right_bottom'>
          <div className='marketing_form_right_bottom_left'>
            <img src={left} />
            <p>Geri</p>
          </div>
          <div className='marketing_form_right_bottom_right'>
            <button>Göndər</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingForm