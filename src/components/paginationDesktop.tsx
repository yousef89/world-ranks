import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
  } from "@/components/ui/pagination";
  
  interface PaginationCountryProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  
  export default function PaginationDesktop({
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
  
    // Reduce the number of visible pages
    const visiblePages = 3; // Reduced from 5 to 3
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);
  
    // Adjust start page if end page is at the limit
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }
  
    return (
        <Pagination className="text-white">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!isPrevDisabled) handlePageChange(currentPage - 1);
                }}
                className={`text-[12px] ${isPrevDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
  
            {startPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(1);
                    }}
                    className="text-[12px]"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {startPage > 2 && (
                  <PaginationItem>
                    <PaginationEllipsis className="text-[12px]" />
                  </PaginationItem>
                )}
              </>
            )}
  
            {[...Array(endPage - startPage + 1)].map((_, index) => {
              const page = startPage + index;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    className="text-[12px]"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
  
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationEllipsis className="text-[12px]" />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(totalPages);
                    }}
                    className="text-[12px]"
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
  
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!isNextDisabled) handlePageChange(currentPage + 1);
                }}
                className={`text-[12px] ${isNextDisabled ? "cursor-not-allowed opacity-50" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

    );
  }