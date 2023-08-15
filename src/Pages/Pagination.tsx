
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({length: totalPages}, (_, index) => index + 1)
  return (
    <div className="flex items-center justify-center mt-4">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                >
                    {page}
                </button>
            ))}
        </nav>
    </div>
  )
}

export default Pagination