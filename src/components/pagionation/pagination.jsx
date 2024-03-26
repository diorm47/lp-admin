import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

function Pagination({ onPageChange, pageCount }) {
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    onPageChange(selectedPage);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Следующая"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="Предыдущая"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
