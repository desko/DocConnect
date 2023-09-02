import {Button, Flex, IconButton} from '@chakra-ui/react';
import {ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons';
import {paginatorStyle, paginationButtonStyle} from './Pagination.theme';


const Pagination = ({itemsPerPage, totalItems, setCurrentPage, currentPage}) => {
  const itemNumbers = [];

  for (let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    itemNumbers.push(i);
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
    if (currentPage < itemNumbers.length) {
      setCurrentPage((old) => old + 1);
    }
  };

  const paginateLast = () =>{
    setCurrentPage(itemNumbers.length);
  };

  const pagianteFirst = () =>{
    setCurrentPage(1);
  };

  return (
    <Flex as='ul' {...paginatorStyle}>
      <IconButton
        as='li'
        onClick={pagianteFirst}
        icon={<ArrowLeftIcon />}
        isDisabled={currentPage === 1 ? true : false}
        {...paginationButtonStyle}/>
      <IconButton
        as='li'
        onClick={pagiantePrev}
        icon={<ChevronLeftIcon />}
        isDisabled={currentPage === 1 ? true : false}
        {...paginationButtonStyle}
        fontSize='20px'
      />

      {itemNumbers.map((number) => (
        <Button
          as='li'
          key={number}
          onClick={(e) => paginate(number, e)}
          {...paginationButtonStyle}
          isActive = {currentPage === number ? true : false}

        >
          {number}
        </Button>
      ))}
      <IconButton
        as='li'
        onClick={paginateNext}
        icon={<ChevronRightIcon />}
        isDisabled={currentPage === itemNumbers.length ? true : false}
        {...paginationButtonStyle}
        fontSize='20px'/>
      <IconButton
        as='li'
        onClick={paginateLast}
        icon={<ArrowRightIcon />}
        isDisabled={currentPage === itemNumbers.length ? true : false}
        {...paginationButtonStyle}/>
    </Flex>
  );
};

export default Pagination;
