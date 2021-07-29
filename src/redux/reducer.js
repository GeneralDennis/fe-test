import { cardsData, countries } from '../data/data';
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
from './variables';
const initPrices = [0, 100500];


const initialState = {
  cards: cardsData,
  countries: countries,
  filteredCountries: countries,
  searchBy: '',
  selectedCountries: [],
  selectedTypes: [],
  selectedStars: [],
  byReviews: '',
  prices: initPrices,
  filteredCards: cardsData,
  currentPage: 1,
  priceSortVal: '',
  aplhabethSortVal: ''
}

const filterCountries = ( countries, filterBy ) => {
  if(!filterBy || !filterBy.length){
    return countries
  }
  return countries.filter(item => item.toLowerCase().includes(filterBy.toLowerCase()))
}

const checkCountry = (selectedCountries, value) => {
  const index = selectedCountries.indexOf(value);
  if(index !== -1) {
    return selectedCountries.filter(item => item !== value)
  } else {
    return [...selectedCountries, value]
  }
}

const setPriceValue = ({ index, value }, state) => {
  if(Array.isArray(value)){
    return value
  }

  if(index === 0){
    return [value, state[index + 1]]
  } else if(index === 1){
    return [state[0], value]
  }
  return [state[index + 1], value]
}

const reset = (item) => {
  return item
}


const filterByRating = (cards, selectedStars) => {
  if(selectedStars.length){
    return cards.filter(item => selectedStars.includes(item.rating))
  }
  return cards
}

const filterByPrices = (cards, prices) => {
  if(prices.length){
    return cards.filter(item => prices[0] <= item.price && prices[1] >= item.price)
  }
  return cards
}

const filterByType = (cards, selectedTypes) => {
  if(selectedTypes.length){
    return cards.filter(item => selectedTypes.includes(item.type))
  }
  return cards
}

const filterByReviews = (cards, byReviews) => {
  if(byReviews.length){
    return cards.filter(item => item.reviews >= +byReviews)
  }
  return cards
}

const filterByCountry = (cards, selectedCountries) => {
  if(selectedCountries.length) {
    return cards.filter(item => selectedCountries.includes(item.location.title))
  }
  return cards
}

const sortByLowPrice = filteredCards => {
  if(filteredCards.length){
    return [...filteredCards.sort((a, b) => a.price - b.price)]
  }
  return filteredCards
}


const sortByHighPrice = filteredCards => {
  if(filteredCards.length){
    return [...filteredCards.sort((a, b) => b.price - a.price)]
  }
  return filteredCards
}

const sortForwards = filteredCards => {
  if(filteredCards.length){
    return [...filteredCards.sort((a, b) => a.title.localeCompare(b.title))]
  }
  return filteredCards
}


const sortBackwards = filteredCards => {
  if(filteredCards.length){
    return [...filteredCards.sort((a, b) => b.title.localeCompare(a.title))]
  }
  return filteredCards
}


const reducer = ( state = initialState, { type, payload }) => {
  switch (type) {

    case GET_COUNTRIES:
      return {
        ...state,
        countries: countries
      }

    case FILTER_COUNTRIES:
      return {
        ...state,
        searchBy: payload,
        filteredCountries: filterCountries(state.countries, payload)
      }

    case RESET_SEARCH_FILTER:
      return {
        ...state,
        searchBy: '',
        filteredCountries: state.countries,
      }

    case CHECK_COUNTRY:
      return {
        ...state,
        selectedCountries: checkCountry(state.selectedCountries, payload)
      }

    case SET_TYPE:
      return {
        ...state,
        selectedTypes: checkCountry(state.selectedTypes, payload)
      }

    case CHECK_STAR:
      return {
        ...state,
        selectedStars: checkCountry(state.selectedStars, payload)
      }

    case REVIEWS_FILTER:
      return {
        ...state,
        byReviews: payload
      }
    case PRICE_INPUT:
      return {
        ...state,
        prices: setPriceValue(payload, state.prices)
      }

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredCountries: reset(countries),
        searchBy: '',
        selectedCountries: [],
        selectedTypes: [],
        selectedStars: [],
        byReviews: '',
        prices: initPrices,
        filteredCards: cardsData,
        currentPage: 1
      }
    case SORT_BY_PRICE:
      let sorter = payload.target.value === 'asc' ?
                    sortByHighPrice(state.filteredCards) :
                    sortByLowPrice(state.filteredCards)
      let val = payload.target.value === 'asc' ? 'desc' : 'asc'
      return {
        ...state,
        filteredCards: sorter,
        priceSortVal: val,
        aplhabethSortVal: ''
      }

    case SORT_BY_ALPHABETH:
      let sorterA = payload.target.value === 'asc' ?
                    sortForwards(state.filteredCards) :
                    sortBackwards(state.filteredCards)
      let valA = payload.target.value === 'asc' ? 'desc' : 'asc'
      return {
        ...state,
        filteredCards: sorterA,
        aplhabethSortVal: valA,
        priceSortVal: ''
      }

    case USE_FILTERS:
      return {
        ...state,
        filteredCards:  filterByRating(
                          filterByPrices(
                            filterByType(
                              filterByReviews(
                                filterByCountry(state.cards, state.selectedCountries),
                              state.byReviews),
                            state.selectedTypes),
                          state.prices),
                        state.selectedStars)
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.selected + 1
      }

    default:
      return { ...state }
  }
}

export default reducer