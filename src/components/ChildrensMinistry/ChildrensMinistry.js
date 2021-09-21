import React from 'react'
import './ChildrensMinistry.css'

const ChildrensMinistry = () => {
  return (
    <div className='childrens-ministry-component section-container'>
      <div className='childrens-ministry section'>
        <h1 className='title section-title'>Children's Ministries</h1>
        <p className='section-text'>
          Each Sunday morning at 10:00am, during our worship service, we have a
          number of great ministries for your children from newborn to 6th
          grade.
        </p>
        <button className='section-button'>See All Ministries</button>
      </div>
    </div>
  )
}

export default ChildrensMinistry
