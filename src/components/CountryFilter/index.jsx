import React from 'react'
import './index.sass'
import { connect } from "react-redux";

import {
  filterCountries,
  resetSearchFilter,
  checkCountry,
} from '../../redux/actions'

const CountryFilter = ({filteredCountries, filterCountries, searchBy, resetSearchFilter, checkCountry, selectedCountries }) => {
  return (
    <div>
      <div className="search-field block block--sm">
        <input type="text"
          placeholder='Поиск стран'
          value={searchBy}
          onInput={e => filterCountries(e.target.value)}
        />
        <button className='clear-search' onClick={resetSearchFilter}></button>
      </div>
      <div className="country-list block block--sm">
        {
          filteredCountries && filteredCountries.length ?
            filteredCountries.map((item, index) => (
              <div className="item" key={index.toString()}>
                <input
                  className='item__input'
                  id={item}
                  type="checkbox"
                  onChange={() => checkCountry(item)}
                  checked={selectedCountries.length ? selectedCountries.includes(item) ? 'checked' : '' : ''}/>

                <label
                  className='item__label'
                  htmlFor={item}
                >
                  {item}
                </label>
              </div>
            ))
          : <div className='contry-list__sorry'>
              К сожалению, по вашему запросу ничего не найдено :(
            </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ filteredCountries, searchBy, selectedCountries }) => ({
  filteredCountries,
  searchBy,
  selectedCountries
})

const mapDispatchToProps = {
  filterCountries,
  resetSearchFilter,
  checkCountry,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryFilter);
