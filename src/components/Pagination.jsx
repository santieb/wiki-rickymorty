const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  return (
    <div style={{ margin: "0 auto 5px auto"}}>
      <button 
        className={pageNumber === 1 ? 'hide' : ''} 
        onClick={() => updatePageNumber(pageNumber-1)}>
        Previous
      </button>
      <button 
        className={pageNumber === info.pages ? 'hide' : ''} 
        onClick={() => updatePageNumber(pageNumber+1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination