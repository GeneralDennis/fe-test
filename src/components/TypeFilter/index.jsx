import React from 'react'
import './index.sass'
import { types } from '../../data/data'
import { connect } from "react-redux";
import { setType } from '../../redux/actions'

const TypeFilter = ({setType, selectedTypes}) => {
  return (
    <div className='type__block block block--sm'>
      {
        types.map((item, index) => (
          <div className='item' key={index.toString()}>
            <input
              type="checkbox"
              className='item__input'
              id={item.toString()}
              onChange={() => setType(item)}
              checked={selectedTypes.length ? selectedTypes.includes(item) ? 'checked' : '' : ''}
              />
            <label
              className='item__label'
              htmlFor={item.toString()}>
              {item}
            </label>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = ({ selectedTypes }) => ({
  selectedTypes
})

const mapDispatchToProps = {
  setType,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeFilter);