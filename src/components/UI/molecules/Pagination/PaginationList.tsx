import { Dispatch, SetStateAction } from "react";
import { Pagination } from "react-bootstrap";

interface PaginationListProps {
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationList = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationListProps) => {
  //Total pages count
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  const changePage = (page: number): number => {
    if (currentPage === page) return page;
    setCurrentPage(page);
    return page;
  };

  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  let isPageNumberOutOfRange: boolean;
  //Fill the pagination items
  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === currentPage}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }
    //Check if is out of range
    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  return (
    <Pagination className="d-flex justify-content-center align-items-center">
      {pageNumbers}
    </Pagination>
  );
};

export default PaginationList;
