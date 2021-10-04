import React from 'react'
import './ChildrensMinistries.css'

const ChildrensMinistries = () => {
  return (
    <div className='page childrens-ministries-page'>
      <div className='page-hero'>
        <div className='page-hero-title'>Children's Ministries</div>
        {/* <h3 className='page-hero-verse'>
          Train up a child in the way he should go, and when he is old he will
          not turn from it.
          <br />
          <span className='ref'>[Proverbs 22:6]</span>
        </h3> */}
      </div>
      <section className='ministries-container section-container'>
        <h1 className='section-title'>Sunday Morning</h1>
        <p className='section-text'>
          Each Sunday morning at 10:00am, during our worship service, we have a
          number of great ministries for your children from four newborn to
          twelve years old.
        </p>
        <div className='ministries-grid'>
          <div className='ministry'>
            <h1 className='section-subtitle'>Parents Room</h1>
            <p className='section-text'>
              Woodland Valley provides a comfortable cry room for parents and
              kids to play together while watching the sunday service.
            </p>
          </div>
          <div className='ministry'>
            <h1 className='section-subtitle'>Nursery</h1>
            <h3 className='section-secondary-title'>Ages: Newborn - 2</h3>
            <p className='section-text'>
              A quite nursery is provided for your children to play and learn in
              a safe environment.
            </p>
          </div>
          <div className='ministry'>
            <h1 className='section-subtitle'>Jesus Jungle</h1>
            <h3 className='section-secondary-title'>
              Ages: 2 - 12 (6th grade)
            </h3>
            <p className='section-text'>
              Our dedicated teachers will lovingly lead your children in
              exciting Bible discovery. Upon arrival Sunday morning, your
              children will be checked into the ministry at our Welcome Desk
              where they will receive a name tag that serves as a pick up tag
              for parents. Jesus Jungle begins with a corporate time of worship
              before children are dismissed to their individual classrooms. ​
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildrensMinistries
