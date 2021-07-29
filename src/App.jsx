import React, { useState } from 'react';
import Card from './components/Card';
import './index.sass';
import { connect } from "react-redux";
import CountryFilter from './components/CountryFilter'
import TypeFilter from './components/TypeFilter'
import Ratings from './components/Ratings';
import ReviewsFilter from './components/ReviewsFilter';
import PriceRange from './components/PriceRange';
import PriceInputs from './components/PriceInputs';
import Sorry from './components/Sorry';
import Pagination from './components/Pagination';
import AuthPopup from './components/AuthPopup';
import Sorters from './components/Sorters';
import Login from './components/Login';

import {
  clearFilters,
  applyFilters,
  setCurrentPage,
  sortByPrice,
  sortByAlphabeth
} from './redux/actions'

const PAGE_COUNT = 5;

function App({
    clearFilters,
    applyFilters,
    filteredCards,
    currentPage,
    setCurrentPage
  }) {
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <Login popup={popup} setPopup={setPopup} />
      <div className='app'>
        <div className="filters">
          <div className="widget">
            <h3 className="title">Страна</h3>
            <CountryFilter/>
          </div>
          <div className="widget">
            <h3 className="title">Тип</h3>
            <TypeFilter/>
          </div>
          <div className="widget">
            <h3 className="title">Количество звезд</h3>
            <Ratings/>
          </div>
          <div className="widget">
            <h3 className="title">Количество отзывов (от)</h3>
            <ReviewsFilter/>
          </div>
          <div className="widget">
            <h3 className="title">Цена</h3>
            <PriceInputs/>
          </div>
          <div className="widget">
            <PriceRange/>
          </div>

          <div>
            <button
              className='button button--violet'
              onClick={applyFilters}
            >
              Применить фильтр
            </button>
            <button
              className='button button--delete'
              onClick={clearFilters}
            >
              Очистить фильтр
            </button>
          </div>

        </div>
        <div className='content'>
          <Sorters />
          {  filteredCards && filteredCards.length ? filteredCards.slice((currentPage - 1) * PAGE_COUNT, currentPage * PAGE_COUNT).map((card, index) => (
            <Card card={card} key={index.toString()}/>
            ))
            :
            <Sorry clearFilters={clearFilters}/>
          }
          { filteredCards && filteredCards.length > PAGE_COUNT ?
            <Pagination
              pageCount={filteredCards.length / PAGE_COUNT}
              onPageChange={setCurrentPage}
            />
            : null
          }
        </div>
      </div>
      <AuthPopup
        popup={popup}
        email={email}
        password={password}
        setPopup={setPopup}
        setEmail={setEmail}
        setPassword={setPassword}
      />

    </div>
  )
}

const mapStateToProps = ({ filteredCards, currentPage, priceSortVal, aplhabethSortVal }) => ({
  filteredCards,
  currentPage,
  priceSortVal,
  aplhabethSortVal
})

const mapDispatchToProps = {
  clearFilters,
  applyFilters,
  setCurrentPage,
  sortByPrice,
  sortByAlphabeth
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


