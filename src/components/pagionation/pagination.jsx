import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

function Pagination({ allData, paginationData, length, activeFilter }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = length || 10;
  const endOffset = itemOffset + itemsPerPage;

  const pageCount = Math.ceil(allData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    paginationData(allData.slice(itemOffset, endOffset));
  }, [itemOffset, endOffset, paginationData]);

  useEffect(() => {
    const filteredData =
      activeFilter === "all"
        ? allData
        : allData.filter((item) => item.status === activeFilter);

    paginationData(filteredData.slice(itemOffset, endOffset));
  }, [itemOffset, endOffset, paginationData, allData, activeFilter]);
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
