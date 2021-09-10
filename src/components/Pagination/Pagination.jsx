import "./Pagination.scss";

function Pagination({ totalPages, paginate, prevBtn, nextBtn, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={prevBtn} className={"pagination__btn"}>
        PREV
      </button>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li
            className={
              currentPage === number
                ? "pagination__el active"
                : "pagination__el"
            }
            key={index}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <button onClick={nextBtn} className={"pagination__btn"}>
        NEXT
      </button>
    </div>
  );
}

export default Pagination;
