import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination-secondary.css";

function PaginationSecondary({ onPageChange, pageCount }) {
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    onPageChange(selectedPage);
  };

  return (
    <div className="secondary_pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Вперед >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Назад"
        renderOnZeroPageCount={null}
      />{" "}
    </div>
  );
}

export default PaginationSecondary;
