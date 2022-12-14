import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='ckmint__features-container__feature'>
      <div className='ckmint__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>  
        <div className='ckmint__features-container__feature-text'>
          <p dangerouslySetInnerHTML={{__html: this.state.actions}}>{__html: text}</p>
        </div>
    </div>
  )
}

export default Feature