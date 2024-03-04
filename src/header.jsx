import React from 'react'
import img1 from './assets/arrow.png'
import img2 from './assets/camera.png'
import img3 from './assets/clapper.png'

const header = () => {
  return (
    <div className='header-container'>
      <h1>Welcome to Omdb!</h1>
      <h3>This is the hidden database where you can access all movies & series for free without<br/> ads at 
        your service 24/7. The only catch is your soul which will be taken 30 years after first use.
      <br/><br/>
      Search a movie down below 
      <hr/>
      </h3>
     <img src={img1} alt="arrow" className='image1'/>
     <img src={img2} alt="camera" className='image2'/>
     <img src={img3} alt="clapper" className='image3'/>
    
    </div>
  )
}

export default header
