interface PaginationCountryProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function PaginationMobile({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationCountryProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className="flex justify-center items-center space-x-2 text-white">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        className={`px-3 py-1 text-[12px] rounded-md ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : "bg-blue-600"
        }`}
      >
        Prev
      </button>

      {/* Dropdown for Page Selection */}
      <select
        value={currentPage}
        onChange={(e) => handlePageChange(Number(e.target.value))}
        className="bg-gray-800 text-white text-[12px] px-4 py-1 rounded-md outline-none"
      >
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <option key={page} value={page}>
              Page {page}
            </option>
          )
        )}
      </select>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isNextDisabled}
        className={`px-3 py-1 text-[12px] rounded-md ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : "bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}
