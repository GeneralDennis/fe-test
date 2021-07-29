import React from 'react'
import './index.sass'
import sorry from '../../images/sorry.png'

export default function Sorry({clearFilters}) {
  return (
    <div className='sorry block'>
      <img src={sorry} alt="sorry" className='sorry__img'/>
      <div className="sorry__title">По данным параметрам ничего не найдено</div>
      <div className="sorry__subtitle">Попробуйте изменить параметры фильтрации или вернуться в общий каталог</div>
      <button
        className='sorry__button button'
            onClick={clearFilters}
      >
        Очистить фильтр
      </button>
    </div>
  )
}
