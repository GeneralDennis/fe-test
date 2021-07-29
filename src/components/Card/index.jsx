import React from 'react'

import './index.sass'
import Star from '../../images/star.svg'
import StarFilled from '../../images/star-fill.png'

export default function Card({ card }) {
  const bookHandler = (e) => {
    e.target.value === 'true' ? alert('Send request to back for unbook') :  alert('Send request to back for book')
  }
  return (
    <div className='card block'>
      <div className='card__header'>
        <div className="card__header-left">
          <div className="card__title">{card.title}</div>
          <div className="card__details">
            <div className='card__ratings'>
              {[1,2,3,4,5].map((item) => (
                <img
                  className='card__ratings-star'
                  key={item.toString()}
                  src={item <= card.rating ? StarFilled: Star}/>
              ))}
            </div>
            <div className='card__type'>{card.type}</div>
            <div className='card__reviews'>{card.reviews} отзыва</div>
            <div className='card__location'>{card.location.title}</div>
          </div>
        </div>
        <div className="card__header-right">
          <div className="card__header-price">{card.price} ₽</div>
          <div className="card__header-period">{card.period}</div>
        </div>
      </div>
      <div className="card__body">
        {card.description}
        <button
          onClick={(e) => bookHandler(e)}
          value={card.booked}
          className={`${card.booked ? 'button book-btn book-btn--booked' : 'button book-btn book-btn--book'}`}>
            {`Забронирова${card.booked ? 'но' : 'ть'}`}
        </button>
      </div>
    </div>
  )
}
