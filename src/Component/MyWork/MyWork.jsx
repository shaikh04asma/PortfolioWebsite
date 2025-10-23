import React from 'react'
import './MyWork.css'
import myworkvid from '../../assets/myworkvid.mp4'
import hm_logo from '../../assets/hmlogo.png'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="section_title">
            <h1>Latest Work👨</h1>
        </div>
      <div className="container">
        <div className="video">
        <video muted autoPlay loop playsInline typeof='video/mp4' src={myworkvid}></video>
        
      </div>
      <div className="mywork_info">
        <img src={hm_logo} alt="hmlogo" />
        <p>Creating innovative visual strategies to boost customer engagement and maximize sales. Skilled in store layout redesign, visual guideline implementation, and brand consistency, with a proven ability to translate creative concepts into measurable business growth. Adept at leveraging strong product knowledge to deliver impactful displays that enhance the overall shopping experience and support organizational objectives.</p>
      </div>
      </div>
    </div>
  )
}

export default MyWork
