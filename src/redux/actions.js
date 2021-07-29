import {
  GET_COUNTRIES,
  FILTER_COUNTRIES,
  RESET_SEARCH_FILTER,
  CHECK_COUNTRY,
  SET_TYPE,
  CHECK_STAR,
  REVIEWS_FILTER,
  PRICE_INPUT,
  CLEAR_FILTERS,
  USE_FILTERS,
  SET_CURRENT_PAGE,
  SORT_BY_PRICE,
  SORT_BY_ALPHABETH
}
from './variables'

export const getCountries = () => ({
  type: GET_COUNTRIES,
})

export const filterCountries = (value) => ({
  type: FILTER_COUNTRIES,
  payload: value
})

export const resetSearchFilter = () => ({
  type: RESET_SEARCH_FILTER
})

export const checkCountry = (value) => ({
  type: CHECK_COUNTRY,
  payload: value
})

export const setType = (value) => ({
  type: SET_TYPE,
  payload: value
})

export const checkStar = (value) => ({
  type: CHECK_STAR,
  payload: value
})

export const setReviewsFilter = (value) => ({
  type: REVIEWS_FILTER,
  payload: value
})


export const setPrice = (index, value) => ({
  type: PRICE_INPUT,
  payload: {
    index,
    value
  }
})

export const clearFilters = () => ({
  type: CLEAR_FILTERS
})

export const applyFilters = () => ({
  type: USE_FILTERS
})

export const setCurrentPage = value => ({
  type: SET_CURRENT_PAGE,
  payload: value
})

export const sortByPrice = value => ({
  type: SORT_BY_PRICE,
  payload: value
})

export const sortByAlphabeth = value => ({
  type: SORT_BY_ALPHABETH,
  payload: value
})