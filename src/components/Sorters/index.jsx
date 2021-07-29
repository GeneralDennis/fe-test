import React from 'react'
import './index.sass'

import { connect } from "react-redux";
import {
  sortByPrice,
  sortByAlphabeth
} from '../../redux/actions'

const Sorters = ({
  aplhabethSortVal,
  sortByAlphabeth,
  sortByPrice,
  priceSortVal
}) => {
  return (
    <div className="block sort__items">
      <div className="sort__item">
        <div className="sort__label">По цене</div>
        <button
          onClick={sortByPrice}
          value={priceSortVal}
          className={`sort__button sort__button--${priceSortVal}`}>
        </button>

      </div>
      <div className="sort__item">
      <div className="sort__label">По алфавиту</div>
      <button
        onClick={sortByAlphabeth}
        value={aplhabethSortVal}
        className={`sort__button sort__button--${aplhabethSortVal}`}>
      </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ priceSortVal, aplhabethSortVal }) => ({
  priceSortVal,
  aplhabethSortVal
})

const mapDispatchToProps = {
  sortByPrice,
  sortByAlphabeth
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorters);
