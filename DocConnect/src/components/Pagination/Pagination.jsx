import {Box, Button, Flex, IconButton} from '@chakra-ui/react';
import {ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons';
import {paginatorStyle, numberButtonStyle, arrowButtonStyle, iconButtonStyle} from './Pagination.theme';

const Pagination = ({itemsPerPage, totalItems, setCurrentPage, currentPage}) => {
  const pageNumbers = [];

  for (let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) =>{
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const pagiantePrev = () =>{
    if (currentPage > 1) {
      setCurrentPage((old) => old - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage((old) => old + 1);
    }
  };

  const paginateLast = () =>{
    setCurrentPage(pageNumbers.length);
  };

  const pagianteFirst = () =>{
    setCurrentPage(1);
  };

  return (
    <Flex
      as='ul'
      {...paginatorStyle}
    >
      <li>
        <IconButton
          aria-label='first'
          onClick={pagianteFirst}
          icon={<ArrowLeftIcon {...iconButtonStyle} />}
          isDisabled={currentPage === 1}
          {...arrowButtonStyle}
          style={{
            '--icon-width': '1rem',
          }}
        />
      </li>

      <li>
        <IconButton
          aria-label='previous'
          onClick={pagiantePrev}
          icon={<ChevronLeftIcon {...iconButtonStyle} />}
          isDisabled={currentPage === 1}
          {...arrowButtonStyle}
          fontSize='20px'
        />
      </li>

      {
        pageNumbers.map((number) => {
          return (
            number <= currentPage + 2 &&
            number >= currentPage - 2
          ) ? (
            <Box
              as='li'
              key={number}
            >
              <Button
                onClick={(e) => paginate(number, e)}
                {...numberButtonStyle}
                isActive = {currentPage === number}
              >
                {number}
              </Button>
            </Box>
          ) : null;
        })
      }

      <li>
        <IconButton
          aria-label='next'
          onClick={paginateNext}
          icon={<ChevronRightIcon {...iconButtonStyle} />}
          isDisabled={currentPage === pageNumbers.length}
          {...arrowButtonStyle}
          fontSize='20px'/>
      </li>

      <li>
        <IconButton
          aria-label='last'
          onClick={paginateLast}
          icon={<ArrowRightIcon {...iconButtonStyle} />}
          isDisabled={currentPage === pageNumbers.length}
          {...arrowButtonStyle}
          style={{
            '--icon-width': '1rem',
          }}
        />
      </li>
    </Flex>
  );
};

export default Pagination;
