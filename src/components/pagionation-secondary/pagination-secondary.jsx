import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination-secondary.css";

function PaginationSecondary({ allData, paginationData, length }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = length || 6;
  const endOffset = itemOffset + itemsPerPage;

  const pageCount = Math.ceil(allData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    paginationData(allData.slice(itemOffset, endOffset));
  }, [itemOffset, endOffset, paginationData]);

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
