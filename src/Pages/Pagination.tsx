import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-4">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-l ${
                  currentPage === pageNumber ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;