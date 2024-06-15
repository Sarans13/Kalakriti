import React from 'react'
import data from '../data.json'
import "../Styles/Prices.css"


const Prices = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data.data[0].ourQualitiesForCustomers.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Prices
