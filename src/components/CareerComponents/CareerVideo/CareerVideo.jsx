import React, { useRef, useState } from 'react'
import video from '../../../assets/img/shirin/emanat.mp4'
import play from '../../../assets/img/shirin/play.png'
import pause from '../../../assets/img/shirin/pause.png'

import '../../CareerComponents/Career.scss'
const CareerVideo = () => {
    const videoEl = useRef()
    const playRef= useRef()
    const backgRef=useRef()
   
    const [muted, setMuted] = useState(true);
   


    const muteVideo = () => {
        

        if(videoEl.current.muted){
            setMuted(false)
            videoEl.current.muted = false
            videoEl.current.play()
            backgRef.current.style.background='none'
        }else{
            videoEl.current.muted = true
            videoEl.current.pause()
            backgRef.current.style.background='linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'

            setMuted(true)
        }

    };
    return (
        <div className='career_video'  onClick={muteVideo}>
            <div className='career_video_el'>
                <video ref={videoEl} playsInline muted className="about-video">
                    <source src={video} type="video/mp4" />
                </video>

                <div className='career_video_el_bg' ref={backgRef}>
                </div>

                {muted ? <div className='career_video_el_div'>
                    <img src={play} ref={playRef}/>
                </div>:<></>}
                
            </div>



        </div>
    )
}

export default CareerVideo