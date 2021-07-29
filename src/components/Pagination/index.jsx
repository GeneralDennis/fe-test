import React from 'react';
import ReactPaginate from 'react-paginate';
import './index.sass'

const Pagination = ({pageCount, onPageChange}) => {
  return (
      <ReactPaginate
          previousLabel={'< Назад'}
          nextLabel={'Следующая >'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={onPageChange}
          containerClassName={'Pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageLinkClassName={"Pagination__Link"}
          pageClassName={"Pagination__Item"}
      />
  );
};

export default Pagination;
