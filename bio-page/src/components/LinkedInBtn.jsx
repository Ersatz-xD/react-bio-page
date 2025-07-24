import React from 'react'
import "./LinkedInBtn.css";

const LinkedInBtn = () => {
  return (
    <div>
    <button className='linkedIn-btn'
      onClick={() => window.open("https://www.linkedin.com/in/ayaan-ahmed-khan-448600351")}>
      Connect
      
    </button>
    
    </div>
  )
}

export default LinkedInBtn