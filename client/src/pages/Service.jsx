import React from 'react'
import { useAuth } from '../store/auth';


const Service = () => {
  const {services} = useAuth();
  console.log("services",services);

  return (
    <section className='section-services'>
      <div className='container'>
        <h1 className='main-heading'>Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((data, i) =>{
          const {service,description,price,provider} = data;
          return(
          <div className='card' key={i}>
            <div className='card-img'>
              <img src='/images/design.png' alt='/images/design.png' width='200'/>
            </div>
            <div className='card-details'>
              <div className='grid grid-two-cols'>
                <p>{provider}</p>
                <p>{price}</p>
              </div>
              <h2>{service}</h2>
              <p>{description}</p>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Service