import React from 'react'
import { featured } from '../../data/Data'
export const FeaturedCard = () => {
  return (
    <div>
        <div className='content grid5 m_top'>
         {
            featured.map((items,index)=>(
                <div className='box' key={index}>
                 <img src={items.image} alt='image'/>
                 <h4>{items.name}</h4>  
                 <label>{items.total}</label>
                </div>
            ))
         }
        </div>
    </div>
  )
}
export default FeaturedCard;
