import { useState, useEffect } from "react"
import styled from 'styled-components'
import ReactPaginate from "react-paginate"

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  const pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <ReactPaginate
      className="pagination"
      previousClassName="paginationButtonText"
      nextClassName="paginationButton"
      nextLabel="Next"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={pageChange}
      pageClassName="paginationButton"
      pageLinkClassName="paginationButton"
    />
  )
}

export default Pagination