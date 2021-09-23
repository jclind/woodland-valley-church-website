import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='page about-page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>Who We Are</h1>
      </div>
      <section className='section-container purpose-intro-container'>
        <div className='section purpose-intro'>
          <div className='title'>
            <h1 className='section-title'>
              A Church
              <br />
              With Purpose
            </h1>
          </div>
          <div className='content'>
            <p className='section-text'>
              The purpose of Woodland Valley Church is to celebrate our love for
              God, care for the needs of His children, carry His Message to the
              world, come together as His family and commit to helping that
              family grow closer to Him. This purpose is drawn from God’s Holy
              Word.
            </p>
          </div>
        </div>
      </section>
      <section className='section-container purpose-content-container'>
        <div className='section purpose-content'>
          <div className='title'>
            <h1 className='section-subtitle'>
              Our purpose is based on 2 Great portions of Scripture:
            </h1>
          </div>
          <div className='content'>
            <article className='purpose-1'>
              <h3 className='purpose-title'>1. The Great Commandment:</h3>
              <p className='verse section-text'>
                Jesus said unto him, Thou shalt love the Lord thy God with all
                thy heart, and with all thy soul, and with all thy mind. [38]
                This is the first and great commandment. [39] And the second is
                like unto it, Thou shalt love thy neighbor as thyself. [40] On
                these two commandments hand all the law and the prophets.
                <span className='ref'>- Matthew 22:37-40</span>
              </p>
            </article>
            <article className='purpose-2'>
              <h3 className='purpose-title'>2. The Great Commission:</h3>
              <p className='verse section-text'>
                Go ye therefore, and teach all nations, baptizing them in the
                name of the Father, and of the Son, and of the Holy Ghost: [20]
                Teaching them to observe all things whatsoever I have commanded
                you, and, lo, I am with you always, even unto the end of the
                world. Amen.
                <span className='ref'>- Matthew 28:19-20</span>
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className='section-container purpose-conclusion-container'>
        <div className='section purpose-conclusion'>
          <p className='section-text'>
            Without a purpose, aim or a goal, we will wander around this life
            ever searching and never finding. At WVC, we have a purpose, and
            want to help you find and fulfill yours. Come grow with us as we
            seek to fulfill God’s will in our lives. He has an amazing plan for
            each of us. Let’s find and fulfill it together!
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
