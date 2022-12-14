import React, { useEffect } from 'react'

const ContactForm = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
    document.getElementsByTagName("header")[0].style.display = 'block'
    document.getElementsByTagName("footer")[0].style.display = 'block'
  }, [])
  return (
    <section className='contact-section'>
      <form className='contact-section-form'>
        <div className="contact-section-form-left">
          <div className="contact-section-form-field">
            <label>Ad və Soyad *</label>
            <input required type="text" placeholder='Ad' name="" id="" />
          </div>

          <div className="contact-section-form-field">
            <label>Mobil Telefon *</label>
            <input required type="number" placeholder='+994' name="" id="" />
          </div>

          <div className="contact-section-form-field">
            <label>E-poçt *</label>
            <input required type="email" placeholder='user@mailcom' name="" id="" />
          </div>
        </div>

        <div className="contact-section-form-right">
          <div className="contact-section-form-field">
            <label>Mövzu *</label>
            <input required type="text" placeholder='Mövzu' name="" id="" />
          </div>

          <div className="contact-section-form-field">
            <label>Mesaj *</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="contact-section-form-right-buttons">
            <button>
              <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.15733 8.05158L17.1559 8.26209M8.24883 1.14428L1.15733 8.05158L8.06463 15.1431" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p>Geri</p>
            </button>

            <button>
              Göndər
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ContactForm