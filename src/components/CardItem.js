import React from 'react'
import {Link} from 'react-router-dom';
import'../styles/Cards.css';
function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
         <figure className='cards__item__pic-wrapper' data-category={props.label}>
            <img src={props.src} alt="Travel Image" className='cards__item__img'></img>
         </figure>
         <div className='cards__item__info'>
        <span className='cards__item__text'>{props.text}</span>
         </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem