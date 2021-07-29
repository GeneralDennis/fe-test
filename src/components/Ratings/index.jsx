import React from 'react'
import { connect } from "react-redux";
import { checkStar } from '../../redux/actions'

const Ratings = ({ checkStar, selectedStars }) => {
  let starItems = []
  for(let i = 1; i<=5; i++){
    starItems.push(i)
  }
  return (
    <div className='ratings block block--sm'>
      {
        starItems.map((item) => (
          <div className="item" key={item.toString()}>
            <input
              className='item__input'
              type="checkbox"
              id={item.toString()}
              checked={selectedStars.length ? selectedStars.includes(item) ? 'checked' : '' : ''}
              onChange={() => checkStar(item)}
              />
            <label
              className={`item__label`}
              htmlFor={item.toString()}>
              {item} {item === 2 || item === 3 || item === 4 ? ' звезды' : item === 5 ? ' звезд' : ' звезда'}
            </label>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = ({ selectedStars }) => ({
  selectedStars,
})

const mapDispatchToProps = {
  checkStar,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ratings);
