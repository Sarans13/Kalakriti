import React from 'react'
import data from '../data.json'
import "../Styles/Services.css"

const Services = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">NOT JUST CONSULTATION <br/>BUT MORE THAN THAT...</h1>
                <p>Our feature allows carpenters, local workers to get onboarded or by the interior designers so that they also get opportunity to grow.</p>
            </div>
            <div className="dishes_container">
                {
                    data.data[0].services.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
