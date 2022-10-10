import React from 'react'
import Heading from '../../common/Heading';
import './Hero.css';
export const Hero = () => {
  return (
    <div>
     <section className='hero'>
        <div className='container'>
            <Heading title='Search Your Next Home' subtitle='Find new and featured property located in your local city' />
            <form action='' className='flex form-search'>
                <div className='box'>
                 <label>city/Street:</label>
                <input type='text' placeholder='Location'/>
                </div>
                <div className='box'>
                 <label>Property Type:</label>
                <input type='text' placeholder='Property Type'/>
                </div>
                <div className='box'>
                 <label>Price Range:</label>
                <input type='text' placeholder='Price Range'/>
                </div>
                <div className='box'>
                 <h4>Advanced Filter</h4>
                </div>
                <button className='btn'>
                    <i className='fa fa-search'></i>
                </button>
            </form>
        </div>
     </section>
    </div>
  )
}
export default Hero;
