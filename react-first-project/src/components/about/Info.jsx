import React from 'react'

const info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            <i class="bx bx-award about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">8 years working</span>
        </div>

        <div className="about_box">
        <i class="bx bx-briafcase-alt about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">3+ Projects</span>
        </div>

        <div className="about_box">
        <i class="bx bx-support about_icon"></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 24/7</span>
        </div>
    </div>

    
  )
}

export default info
