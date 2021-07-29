import React from 'react'
import { connect } from "react-redux";
import { setPrice } from '../../redux/actions'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


const PriceRange = ({prices, setPrice}) => {
  return (
    <div>
      <Range
        onChange={e => setPrice(undefined, e)}
        min={0}
        max={100500}
        value={prices}
        pushable={true}
      />
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
)(PriceRange);
