import React from 'react'
import data from '../data.json'
import "../Styles/WhoWeAre.css"

const WhoWeAre = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
              data.data[0].who_we_are.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src="WhoWeAre.jpg" alt="food" />
          </div>
          <div className="text_banner">
            {
              data.data[0].who_we_are.slice(2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p> 
                </div>
              ))
            }
          </div>
        </div>
        </section> 
    </>
  )
}

export default WhoWeAre
