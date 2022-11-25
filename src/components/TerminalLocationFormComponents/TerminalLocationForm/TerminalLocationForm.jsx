import React from 'react'
import logo from '../../../assets/img/shirin/logo.png'
import { Link } from 'react-router-dom'
import marketing2 from '../../../assets/img/shirin/marketing2.png'
import star from '../../../assets/img/shirin/required.png'
import left from '../../../assets/img/shirin/left.png'
import plus from '../../../assets/img/shirin/plus.png'

import '../../TerminalLocationFormComponents/TerminalLocationForm.scss'
const TerminalLocationForm = () => {
  return (
    <div className='terminal_location_form'>
      <div className='terminal_location_form_left'>
        <div className='terminal_location_form_left_logo'>
          <Link to='/'>
            <img src={logo} />

          </Link>
        </div>
        <div className='terminal_location_form_left_img'>
          <img src={marketing2} />
        </div>
      </div>
      <div className='terminal_location_form_right'>
        <div className='terminal_location_form_right_h1'>
          <h1> <span>Terminalların</span> yerləşdirilməsi</h1>
        </div>
        <div className='terminal_location_form_right_form'>
          <div className='terminal_location_form_right_form_one'>
            <p>Sizə məxsus obyektə eManat terminalının yerləşdirilməsi üçün zəhmət olmasa, forumu doldurun.</p>
          </div>
          <form>
            <div className="terminal_location_form_right_form_element">
              <label>Ad, Soyad <img className='star' src={star} /></label>
              <input type="ad" placeholder='Ad,soyad' name="" id="" />
            </div>
            <div className="terminal_location_form_right_form_element">
              <label>Nömrə<img className='star' src={star} /></label>
              <input type="ad" placeholder='+994' name="" id="" />
            </div>
            <div className="terminal_location_form_right_form_element">
              <label>E-poçt<img className='star' src={star} /></label>
              <input type="ad" placeholder='user@gmail.com' name="" id="" />
            </div>
            <div className="terminal_location_form_right_form_element">
              <label>Ünvan<img className='star' src={star} /></label>
              <input type="ad" placeholder='' name="" id="" />
            </div>
            <div className="terminal_location_form_right_form_element">
              <p className='load'>Sosial media<img className='star' src={star} /></p>


              <label className='lb'>Cv
                <div className='vector'>
                  <img src={plus} />
                </div>
                <input className='' type="file" />
              </label>




            </div>
            <div className='terminal_location_form_right_form_p'>
              <p>Fayl yüklə: PDF,JPF, maks 5 MB</p>

            </div>
            <div className="terminal_location_form_right_form_element">
              <label>Qeyd<img className='star' src={star} /></label>

              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </form>

        </div>
        <div className='terminal_location_form_right_bottom'>
          <div className='terminal_location_form_right_bottom_left'>
            <img src={left} />
            <p>Geri</p>
          </div>
          <div className='terminal_location_form_right_bottom_right'>
            <button>Göndər</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TerminalLocationForm