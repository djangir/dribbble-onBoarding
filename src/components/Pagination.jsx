import React, { useState } from "react";

function Pagination(props) {
  const { totalPages, activePage, setPage } = props;

  let arr = new Array(totalPages).fill("");

  const renderPagination = () => {
    return arr.map((item, index) => {
      let activeClass = activePage >= index ? "activePage" : "";
      return (
        <div
          className={`px-2 pageBox ${activeClass}`}
          onClick={() => {
            setPage(index);
          }}
        >
          {index + 1}
        </div>
      );
    });
  };

  const calculateWidth = () => {
    return Math.floor(((activePage + 1) / totalPages) * 100) + "%";
  };

  return (
    <div className="relative my-3">
      <div className="d-flex paginationDiv">{renderPagination()}</div>
      <div className="pageline">
        <div className="pagelineFill" style={{ width: calculateWidth() }} />
      </div>
    </div>
  );
}

export default Pagination;
