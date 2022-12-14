import React, { Fragment, useEffect, useRef } from 'react'
import man from '../../../assets/img/shirin/group-6.png'
import group from '../../../assets/img/shirin/group-1.png'
import group2 from '../../../assets/img/shirin/group-2.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)




const ServicesSecond = () => {
  //  animation ref
  const hRef = useRef()
  const serviceRef = useRef()
  const gRef = useRef()
const oneRef=useRef()
const twoRef=useRef()
const threeRef=useRef()
const fourRef=useRef()
const fiveRef=useRef()
const sixRef=useRef()
const manRef=useRef()
const grupRef=useRef()
const rightRef=useRef()
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(hRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        start:'-400',
        end: "+=400",
        trigger: serviceRef.current,
        scrub: true,
          
      },
    },"<")
      .from(gRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-400',
          end: "+=500",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      .from(manRef.current, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-10',
          end: "+=800",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      .from(rightRef.current, {
        x: 100,
        // opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-300',
          end: "+=800",
          trigger: serviceRef.current,
          scrub: true,
         
        },
      }, '<')
      
      .from(grupRef.current, {
        x: 500,
        // opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          start:'-300',
          end: "+=900",
          trigger: serviceRef.current,
          scrub: true,
      
        },
      }, '<')
  }, []);

  return (
    <Fragment>

      <div className='services-second' ref={serviceRef}>

        <h2 ref={hRef} className='services-second-h1'>Reklam imkanlar??</h2>
        <img ref={gRef} className='group-1' src={group} loading="lazy"/>
        <div className='services-second-middle'>
          <img ref={manRef} className='services-second-middle-left' src={man} loading="lazy"/>

          <div className='services-second-middle-right' ref={rightRef}>
            <div className='services-second-middle-right-element' ref={oneRef}>
              <p className='services-second-middle-right-element-p'>01.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>M????t??ri m??mnuniyy??ti</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '250px' }}>Siz 7/24 ??d??ni?? q??bul etm??kl??, m????t??ril??riniz?? daha yax???? xidm??t g??st??rmi?? olacaqs??n??z</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={twoRef}>
              <p className='services-second-middle-right-element-p'>02.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>X??rcl??rin azald??lmas??</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Siz ??d??ni??l??rin q??bulu ??????n ??lav?? i????i q??vv??si v?? avadanl??q saxlama??a ehtiyac duymayacaqs??n??z v?? x??rcl??rinizi ??h??miyy??tli d??r??c??d?? azaldacaqs??n??z</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={threeRef}>
              <p className='services-second-middle-right-element-p'>03.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Prosesl??rin effektiv idar?? edilm??si</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>  ??d??ni?? q??bulu zaman?? yarana bil??c??k probleml??rli aradan qald??rm???? olacaqs??n??z. N??tic??d?? ??irk??tin i????i q??vv??sinin effektiv v?? s??m??r??li idar?? edilm??sin?? nail olacaqs??n??z.</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={fourRef}>
              <p className='services-second-middle-right-element-p'>04.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Sat????lar??n artmas??</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Terminallar vasit??sil?? ??d??ni?? q??bulu m????t??ri m??mnuniyy??tin?? s??b??b olmaqla, m??vcud m????t??ril??rinizin qorunub saxlanmas?? v?? yeni m????t??ril??rin c??lb edilm??sin?? g??tirib ????xaracaq</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={fiveRef}>
              <p className='services-second-middle-right-element-p'>05.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>QIWI il?? texniki ??m??kda??l??q</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>Proqram t??minat??, texniki d??st??k sah??l??rind?? biz d??nyaca m????hur QIWI ??irk??ti il?? ??m??kda??l??q edirik. Bu s??b??bd??n d?? xidm??timiz keyfiyy??ti v?? etibarl??d??r.</p>
              </div>
            </div>

            <div className='services-second-middle-right-element' ref={sixRef}>
              <p className='services-second-middle-right-element-p'>06.</p>
              <div className='services-second-middle-right-element-div'>
                <p className='services-second-middle-right-element-div-p'>Reklam yerl????dirm??k imkan??</p>
                <p className='services-second-middle-right-element-div-bottom' style={{ maxWidth: '375px' }}>??m??kda??l??????m??z ????r??iv??sind?? terminallardan v?? q??bzl??rd?? reklam yerl????dirm??k imkan?? ??ld?? ed??c??ksiniz. Bu da siz?? a??a???? x??rcl?? daha ??ox potensial m????t??ri tapma??a imkan ver??c??kdir.</p>
              </div>
            </div>

          </div>
          <img ref={grupRef} className='services-second-middle-group-2' src={group2} loading="lazy"/>
        </div>


      </div>
    </Fragment>
  )
}

export default ServicesSecond