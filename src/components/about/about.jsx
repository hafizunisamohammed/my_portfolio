import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'
import Me from '../../assets/me-about.jpeg'

const about = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className='conatiner about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
        <img src={Me} alt="About Image" />
      </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          
          
          <article className='about_card'>
            <p>
        "Hi! I am Hafizunisa but people call me Hafiz, currently am in Kalinga Institute of Industrial Technology,Bhubneshwar, Odisha. I will be graduating in spring 2024 with a bachelors degree in Technology.
I would like to pursue a career in Machine Learning and work in a challenging environment which helps to learn new endeavors and grow professionally and to contribute in the growth of the company
with hard work and dedication. I am tireless seeker of knowledge, occasional purveyor of wisdom. I beleive in having a good time while doing what we love,and I do love what I do. I am also a admirer of 
people with a great taste in food. So if you are also someone who have an interest in good food then contact me, also if you are looking for someone having experience in development and machine learning then let's talk, while having great food."
        </p>
          </article>
        </div>
        
        <a href="#contact" className='btn btn-primary'>
          Let's Talk
        </a>
      </div>
      

    </div>


    </section>
  )
}

export default about