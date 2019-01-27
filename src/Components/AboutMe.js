import React from 'react'
import profile from '../Images/profile.jpg'

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-me">
        <img src={profile} alt="my fat face" className="profile" />
        <div className="personal-comment">
          <p>A Personal Blog of Rick Brown.</p>
          <span>Based on Overreacted.io by Dan Abrimov</span>
        </div>
      </div>
      <p>
        These are all articles that have helped me massively improve my
        React skills.
          </p>
      <p>So, if you appear on this list, I'm sending you a heartfelt thank you!!</p>
    </div>
  )
}

export default AboutMe
