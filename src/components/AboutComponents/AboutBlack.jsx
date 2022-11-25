import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import Map from '../../assets/img/about-map.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutBlack = () => {
  const mapRef = useRef()
  const blackRef = useRef()
  const aboutBlack = useRef()
  useEffect(() => {
    if (window.innerWidth > 1024) {
      let tl = gsap.timeline()
      tl.from(blackRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start: '-400',
          end: "+=400",
          trigger: aboutBlack.current,
          scrub: true,

        },
      })
        .from(mapRef.current, {
          x: 500,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            start: '-400',
            end: "+=400",
            trigger: aboutBlack.current,
            scrub: true,

          },
        })
    }
  }, []);
  return (
    <section ref={aboutBlack} className='about-black-section'>
      <div ref={blackRef} className="about-black-section-text">
        <p>HAZIRDA ÖDƏNİŞ TERMİNALLARI
          ŞƏBƏKƏSİNƏ <span>3000-DƏN</span> ARTIQ
          ÖDƏMƏ TERMİNALLARI DAXİLDİR.
          TERMİNAL ÜNVANLARINA <Link to='/terminal-map'>BURADAN</Link> BAXA BİLƏRSİNİZ  </p>
      </div>

      <div ref={mapRef} className="about-black-section-image">
        <img src={Map} alt=""  loading="lazy"/>
      </div>
    </section>
  )
}

export default AboutBlack