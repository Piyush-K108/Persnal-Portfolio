import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from "@mui/icons-material/Email"
import GithubIcon from "@mui/icons-material/GitHub"
import "../styles/Home.css"


function Home() {
  return (
    <div className='home'>
      <div className='about'> 
          <h2>Hi, My Name is Prashant</h2>
          <div className='prompt'>
            <p>
              A Software developer with a passion for learning and creating.
            </p>
            <LinkedInIcon/>
            <GithubIcon/>
            <EmailIcon/>
          </div>
      </div>
      <div className='skills'>  
        <h2>Skills</h2>
        <ul className='List'>
          <li className='item'>
            <h2>Front-End</h2>
            <span> React, React-Native, Javascript, Html </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> Python, Django, Mysql</span>
          </li>
          <li className='item'>
            <h2>Tools</h2>
            <span>AWS, Rest Api's, Pyspark</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home



