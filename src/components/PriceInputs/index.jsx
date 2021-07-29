import React from 'react'
import './index.sass'
import { connect } from "react-redux";
import { setPrice } from '../../redux/actions'

const PriceInputs = ({prices, setPrice}) => {
  return (
    <div className="prices">
      <div className='block block--sm prices-block'>
        <input
          type="number"
          placeholder={`от ${prices[0]} ₽`}
          value={prices[0]}
          onInput={e => setPrice(0, +e.target.value)}/>
      </div>
      <div className='prices__dash'></div>
      <div className='block block--sm prices-block'>
        <input
          type="number"
          placeholder={`до ${prices[1]} ₽`}
          value={prices[1]}
          onInput={e => setPrice(1, +e.target.value)}/>
      </div>

    </div>
  )
}

const mapStateToProps = ({ prices }) => ({
  prices
})

const mapDispatchToProps = {
  setPrice,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceInputs);